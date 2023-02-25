import Button from "@mui/material/Button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { MailListContext } from "../App";
import { auth, provider } from "../util/firebase";

const Login2 = () => {
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

  const { state: MailList, setState: setMailList } = useContext(MailListContext);
  const Log = () => {
    console.log(MailList);
  };

  return (
    <>
      <Button variant='contained' color='primary' onClick={SendLogin}>
        Googleログイン
      </Button>
      <Button variant='contained' onClick={Log}>
        メール
      </Button>
    </>
  );
};

export default Login2;
