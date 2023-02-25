import { Box, Button, CssBaseline, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigation = useNavigate();

  return (
    <Stack spacing={2} sx={{ m: 3 }}>
      <Box component={"img"} alt = "MaCha" src = "./src/components/image/MaCha.png" width = {100} />
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
          navigation("/ChatPage");
        }}
      >
        <Typography noWrap={true}>チャット</Typography>
      </Button>
      <Button
        variant='contained'
        onClick={() => {
          navigation("/");
        }}
      >
        <Typography noWrap={true}>ユーザ</Typography>
      </Button>
    </Stack>
  );
};

export default NavBar;
