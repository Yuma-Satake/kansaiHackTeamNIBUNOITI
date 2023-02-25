import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import ChatPage from "../components/Pages/ChatPage";
import Login from "../firebase/login";
import MailsPage from "../components/Pages/MailsPage";
import ThredPage from "../components/Pages/ThredPage";
import ErrorPage from "../components/Pages/ErrorPage";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../util/firebase";
import LandingPage from "../components/Pages/LandingPage";

const PageRouter = () => {
  const [isLogin, setIsLogin] = useState(false);

  const checkLogin = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
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
        <Route path={"/"} element={isLogin ? <MailsPage /> : <LandingPage />} />
        <Route path={"/MailsPage"} element={isLogin ? <MailsPage /> : <Login />} />
        <Route path={"/ChatPage"} element={isLogin ? <ChatPage /> : <Login />} />
        <Route path={"/ThredPage"} element={isLogin ? <ThredPage /> : <Login />} />
        <Route path={"/*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
