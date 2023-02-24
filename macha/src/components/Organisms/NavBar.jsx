import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const NavBar = () => {
  return (
    <Stack spacing={2} sx={{ height: "800px", m: 3 }}>
      <Button variant='contained'>
        <Typography noWrap={true}>受信</Typography>
      </Button>
      <Button variant='contained'>
        <Typography noWrap={true}>チャット</Typography>
      </Button>
      <Button variant='contained'>
        ユ<Typography noWrap={true}>ユーザ</Typography>
      </Button>
    </Stack>
  );
};

export default NavBar;
