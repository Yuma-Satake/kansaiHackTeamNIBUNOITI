import PageRouter from "./router/PageRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/system";
import mainTheme from "./style/Theme";
import { createContext, useState } from "react";
import Login2 from "./firebase/login2";

export const UserInfoContext = createContext({});
export const MailListContext = createContext({});
export const SelectThredIdContext = createContext({});

function App() {
  const [UserInfo, setUserInfo] = useState();
  const [MailList, setMailList] = useState();
  const [SelectThredId, setSelectThredId] = useState();

  return (
    <SelectThredIdContext.Provider value={{ state: SelectThredId, setState: setSelectThredId }}>
      <MailListContext.Provider value={{ state: MailList, setState: setMailList }}>
        <UserInfoContext.Provider value={{ state: UserInfo, setState: setUserInfo }}>
          <CssBaseline />
          <ThemeProvider theme={mainTheme}>
            <PageRouter />
            <Login2 />
          </ThemeProvider>
        </UserInfoContext.Provider>
      </MailListContext.Provider>
    </SelectThredIdContext.Provider>
  );
}

export default App;
