import PageRouter from "./router/PageRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/system";
import mainTheme from "./style/Theme";
import PostMailpreTest from "./components/preTest/postMailpreTest";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={mainTheme}>
        <PageRouter />
      </ThemeProvider>
      <PostMailpreTest />
    </>
  );
}

export default App;
