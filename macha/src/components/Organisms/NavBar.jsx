import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigation = useNavigate();

  const handleNavigation = (location) => {
    navigation(location);
  };

  return (
    <Stack spacing={2} sx={{ height: "800px", m: 3 }}>
      <Button variant='contained' onClick={handleNavigation("/MailsPage")}>
        <Typography noWrap={true}>受信</Typography>
      </Button>
      <Button variant='contained' onClick={handleNavigation("/ChatPage")}>
        <Typography noWrap={true}>チャット</Typography>
      </Button>
      <Button variant='contained' onClick={handleNavigation("/")}>
        <Typography noWrap={true}>ユーザ</Typography>
      </Button>
    </Stack>
  );
};

export default NavBar;
