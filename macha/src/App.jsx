import PageRouter from "./router/PageRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/system";
import mainTheme from "./style/Theme";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={mainTheme}>
        <PageRouter />
      </ThemeProvider>
    </>
  );
}

export default App;