import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../util/firebase";

const SendLogin = async () => {
  provider.addScope("https://mail.google.com/");
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      localStorage.setItem("token", `${token}`);
      localStorage.setItem("uid", `${user.uid}`);
      localStorage.setItem("displayName", `${user.displayName}`);
      localStorage.setItem("email", `${user.email}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default SendLogin;
