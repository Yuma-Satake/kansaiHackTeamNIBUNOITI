import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "../components/Pages/ChatPage";
import Login from "../firebase/login";
import MailsPage from "../components/Pages/MailsPage";
import ThredPage from "../components/Pages/ThredPage";
import ErrorPage from "../components/Pages/ErrorPage";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../util/firebase";

const PageRouter = () => {
  const [isLogin, setIsLogin] = useState(false);

  const checkLogin = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("signed in");
        localStorage.setItem("token", await user.getIdToken());
        localStorage.setItem("uid", user.uid);

        setIsLogin(true);
      }
    });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={"/"} element={true ? <MailsPage /> : <Login />} />
        <Route path={"/MailsPage"} element={true ? <MailsPage /> : <Login />} />
        <Route path={"/ChatPage"} element={true ? <ChatPage /> : <Login />} />
        <Route path={"/ThredPage"} element={true ? <ThredPage /> : <Login />} /> */}
        <Route path={"/"} element={isLogin ? <MailsPage /> : <Login />} />
        <Route path={"/MailsPage"} element={isLogin ? <MailsPage /> : <Login />} />
        <Route path={"/ChatPage"} element={isLogin ? <ChatPage /> : <Login />} />
        <Route path={"/ThredPage"} element={isLogin ? <ThredPage /> : <Login />} />
        <Route path={"/*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
