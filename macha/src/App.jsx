import PageRouter from "./router/PageRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/system";
import mainTheme from "./style/Theme";
import { createContext, useState } from "react";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const UserInfoContext = createContext({});
export const MailListContext = createContext({});
export const SelectThredIdContext = createContext({});
export const AlrartContext = createContext({});

function App() {
  const [UserInfo, setUserInfo] = useState();
  const [MailList, setMailList] = useState();
  const [SelectThredId, setSelectThredId] = useState();
  const [OpenAlrart, setOpenAlrart] = useState(true);

  return (
    <SelectThredIdContext.Provider value={{ state: SelectThredId, setState: setSelectThredId }}>
      <MailListContext.Provider value={{ state: MailList, setState: setMailList }}>
        <UserInfoContext.Provider value={{ state: UserInfo, setState: setUserInfo }}>
          <AlrartContext.Provider value={{ state: OpenAlrart, setState: setOpenAlrart }}>
            <CssBaseline />
            <ThemeProvider theme={mainTheme}>
              <PageRouter />
            </ThemeProvider>
            {/* <Snackbar>
              open={OpenAlrart}
              autoHideDuration={5000}
              onClose=
              {() => {
                setOpenAlrart(false);
              }}
              <Alert
                onClose={() => {
                  setOpenAlrart(false);
                }}
                severity='success'
                sx={{ width: "100%" }}
              >
                This is a success message!
              </Alert>
            </Snackbar> */}
          </AlrartContext.Provider>
        </UserInfoContext.Provider>
      </MailListContext.Provider>
    </SelectThredIdContext.Provider>
  );
}

export default App;
