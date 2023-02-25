import PageRouter from "./router/PageRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/system";
import mainTheme from "./style/Theme";
import { MailsContext, UserInfoContext } from "./util/userContext";
import { useEffect, useState } from "react";
import { getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./util/firebase";

function App() {
  const [UserInfo, setUserInfo] = useState();
  const [Mails, setMails] = useState();

  // useEffect(() => {
  //   const GetToken = async () => {
  //     const result = await getRedirectResult(auth);
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     const user = result.user;
  //     console.log(token);
  //     console.log(user);
  //     localStorage.setItem("token", token);
  //   };
  //   GetToken();
  // }, []);

  return (
    <>
      <MailsContext.Provider value={{ state: Mails, setState: setMails }}>
        <UserInfoContext.Provider value={{ state: UserInfo, setState: setUserInfo }}>
          <CssBaseline />
          <ThemeProvider theme={mainTheme}>
            <PageRouter />
          </ThemeProvider>
        </UserInfoContext.Provider>
      </MailsContext.Provider>
    </>
  );
}

export default App;
