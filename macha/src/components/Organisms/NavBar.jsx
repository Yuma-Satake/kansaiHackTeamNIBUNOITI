import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Logout from "../../firebase/logout";
import ChatIcon from "@mui/icons-material/Chat";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NavBar = () => {
  const navigation = useNavigate();

  return (
    <Stack spacing={2} sx={{ m: 3 }}>
      <Button
        onClick={() => {
          navigation("/MailsPage");
        }}
      >
        <Box component={"img"} alt='MaCha' src='./src/assets/logo.png' width={100} sx={{ml:-0.2,mt:-2,pb:1}}/>
      </Button>
      <Button
        variant={window.location.pathname==="/MailsPage"?'contained':'contained outlined'}
        onClick={() => {
          navigation("/MailsPage");
        }}
      >
        <Stack direction={"row"}>
          <ChatIcon sx={{ml: -7}}/>
          <Typography noWrap={true}>受信</Typography>
        </Stack>
      </Button>
      <Button
        variant={window.location.pathname==="/ChatPage"?'contained':'contained outlined'}
        onClick={() => {
          navigation("/");
        }}
      >
        <QuestionAnswerIcon sx={{ml: -3}}/>
        <Typography noWrap={true}>チャット</Typography>
      </Button>
      <Button
        variant={window.location.pathname==="/UserPage"?'contained':'contained outlined'}
        onClick={() => {
          Logout()
          window.location.pathname = "/";
        }}
      >
        <AccountCircleIcon sx={{ml: -1}}/>
        <Typography noWrap={true}>アカウント</Typography>
      </Button>
    </Stack>
  );
};

export default NavBar;
