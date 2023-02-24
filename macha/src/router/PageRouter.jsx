import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "../components/Pages/ChatPage";
import LandingPage from "../components/Pages/LandingPage";
import MailsPage from "../components/Pages/MailsPage";
import ThredPage from "../components/Pages/ThredPage";
import ErrorPage from "../components/Pages/ErrorPage";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/MailsPage"} element={<MailsPage />} />
        <Route path={"/ChatPage"} element={<ChatPage />} />
        <Route path={"/ThredPage"} element={<ThredPage />} />
        <Route path={"/*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
