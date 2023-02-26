import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../util/firebase";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  console.log("logout fired");
  // const navigate = useNavigate();
  const logout = () => {
    //ログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      // navigate("/LandingPage");
      console.log("完了");
    });
  };
  logout();
};

export default Logout;
