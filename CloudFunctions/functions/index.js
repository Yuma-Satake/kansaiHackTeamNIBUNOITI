const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
require("dotenv").config();

admin.initializeApp();
const CLIENTID = process.env.CLIENTID;
const CLIENTSECRET = process.env.CLIENTSECRET;
const REFRESHTOKEN = process.env.REFRESHTOKEN;

exports.postMail = functions.https.onRequest((req, res) => {
  const fromText = req.query.from;
  const toText = req.query.to;
  const subjectText = req.query.subject;
  const textText = req.query.text;

  const message = {
    from: fromText,
    to: toText,
    subject: subjectText,
    text: textText
  };

  const auth = {
    type: "OAuth2",
    user: fromText,
    clientId: CLIENTID,
    clientSecret: CLIENTSECRET,
    refreshToken: REFRESHTOKEN
  };

  // const auth = {
  //   type: "OAuth2",
  //   user: fromText,
  //   clientId: "297424317113-uqbnokdn02v69j6pv2iqncvg2eti9lo8.apps.googleusercontent.com",
  //   clientSecret: "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",
  //   refreshToken:
  //     "1//049dRsTmP4KHICgYIARAAGAQSNwF-L9Ir2IEO6Sx6TLdlsNIC32K9GfnWHKrb4Z-1P5_2rTEHj7Y-W68sACzS4kTo0lVLremUM3M"
  // };

  const transport = {
    service: "gmail",
    auth: auth
  };

  let transporter = nodemailer.createTransport(transport);

  transporter.sendMail(message, function (err, response) {
    res.set({ "Access-Control-Allow-Origin": "*" });
    res.send(err || response);
    console.log(err || response);
  });
});
