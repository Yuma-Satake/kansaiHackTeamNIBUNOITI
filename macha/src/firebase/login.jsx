import React, { useState, useEffect } from 'react';
import { signInWithRedirect,getRedirectResult, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from '../util/firebase';


const Login = () => {

  const user = auth.currentUser;

  const [isLogin, setIsLogin] = useState(false);

  const checkLogin = () => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('signed in')
        setIsLogin(true);
      } else { 
        setIsLogin(false);
      }
    });
  };

  const loginInWithGoogle = () => {
    signInWithRedirect(auth, provider);
    //auth.onAuthStateChanged
    getRedirectResult(auth)
    .then((result) => {
      if(result.credential) {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(`succes: ${user}`);
      }

      // This gives you a Google Access Token. You can use it to access the Google API.
      
      // ...
    }).catch((error) => {
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error);
      // ...
    });
    
  }

  useEffect(() => {
    checkLogin();
  })
  

  return (
    isLogin ? 
    ( <div><p>ログイン成功</p></div>):
     ( <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
      {console.log(user)}
      </div>)
  );
}

export default Login;
