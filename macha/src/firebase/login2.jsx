import React from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../util/firebase";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";

const Login = ({setIsAuth}) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      
      // This gives you a Facebook Access Token.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      localStorage.setItem("isAuth", True);
      localStorage.setItem("uid", uid);
      localStorage.setItem("credential", credential);
      localStorage.setItem("token", token);

      console.log("test");

      setIsAuth(true);
      navigate("../components/Pages/MailsPage");
    });
  };

  return (
    <div>
      <p>ログイン</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;