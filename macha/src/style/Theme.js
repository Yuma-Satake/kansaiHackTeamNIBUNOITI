import { createTheme } from "@mui/material";

const mainTheme = createTheme({
  typography: {
    fontFamily: ["Roboto", '"Noto Sans JP"'].join(",")
  },
  palette: {
    primary: {
      main: "#B0DC64",
      light: "#e4ff94",
      dark: "#7eaa34"
    },
    secondary: {
      main: "#E8E8E8",
      light: "#1F1F1F"
    }
  }
});

export default mainTheme;
