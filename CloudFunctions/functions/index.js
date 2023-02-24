const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");
const admin = require("firebase-admin");

admin.initializeApp();

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
