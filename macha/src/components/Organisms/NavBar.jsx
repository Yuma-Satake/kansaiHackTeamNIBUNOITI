import { Box, Button, CssBaseline, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Logout from "../../firebase/logout";

const NavBar = () => {
  const navigation = useNavigate();

  return (
    <Stack spacing={2} sx={{ m: 3 }}>
      <Box component={"img"} alt='MaCha' src='./src/assets/logo.png' width={100} />
      <Button
        variant='contained'
        onClick={() => {
          navigation("/MailsPage");
        }}
      >
        <Typography noWrap={true}>受信</Typography>
      </Button>
      <Button
        variant='contained'
        onClick={() => {
          navigation("/");
        }}
      >
        <Typography noWrap={true}>チャット</Typography>
      </Button>
      <Button
        variant='contained'
        onClick={() => {
          Logout()
          window.location.pathname = "/";
        }}

      >
        <Typography noWrap={true}>ログアウト</Typography>
      </Button>
      <Button
        variant='contained'
        onClick={() => {
          // TODO: fix
          // Logout
          // console.log("call")
        }}  
      >
        <Typography noWrap={true}>ユーザ</Typography>
      </Button>
    </Stack>
  );
};

export default NavBar;
