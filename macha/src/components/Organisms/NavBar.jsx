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
    <Stack spacing={2} sx={{ ml: 3, mr: 3 }}>
      <Button
        onClick={() => {
          navigation("/MailsPage");
        }}
      >
        <Box
          component={"img"}
          alt='MaCha'
          src='./src/assets/logo.png'
          width={130}
          sx={{ ml: -0.2, pb: 1 }}
        />
      </Button>
      <Button
        variant={window.location.pathname === "/MailsPage" ? "contained" : "contained outlined"}
        sx={{ p: 2 }}
        onClick={() => {
          navigation("/MailsPage");
        }}
      >
        <Stack direction={"row"}>
          <ChatIcon sx={{ ml: -7, mr: 1 }} />
          <Typography noWrap={true}>受信</Typography>
        </Stack>
      </Button>
      <Button
        variant={window.location.pathname === "/ChatPage" ? "contained" : "contained outlined"}
        sx={{ p: 2 }}
        onClick={() => {
          navigation("/");
        }}
      >
        <QuestionAnswerIcon sx={{ ml: -3, mr: 1 }} />
        <Typography noWrap={true}>チャット</Typography>
      </Button>
      <Button
        variant={window.location.pathname === "/UserPage" ? "contained" : "contained outlined"}
        sx={{ p: 2 }}
        onClick={() => {
          Logout();
          window.location.pathname = "/";
        }}
      >
        <AccountCircleIcon sx={{ ml: -1, mr: 1 }} />
        <Typography noWrap={true}>ログアウト</Typography>
      </Button>
    </Stack>
  );
};

export default NavBar;
