import React from "react";
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "../components/Pages/ChatPage";
import Login from "../firebase/login2";
import MailsPage from "../components/Pages/MailsPage";
import ThredPage from "../components/Pages/ThredPage";
import ErrorPage from "../components/Pages/ErrorPage";


const PageRouter = () => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (  
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={isAuth? <MailsPage />: <Login setIsAuth={setIsAuth} /> }/>
        <Route path={"/MailsPage"} element={<MailsPage />} />
        <Route path={"/ChatPage"} element={ <ChatPage />} />
        <Route path={"/ThredPage"} element={ <ThredPage />} />
        <Route path={"/*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
