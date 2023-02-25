import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import NavBar from "../Organisms/NavBar";
import Search from "../Organisms/Search";

const BaseLayout = (props) => {
  const children = props.children;
  return (
    <Stack direction='row'>
      <Box sx={{ bgcolor: "secondary.main" }}>
        <NavBar />
      </Box>
      <Stack direction='column' sx={{ pl: 2, bgcolor: "primary.main" }}>
        <Stack direction='row'>
          <Search />
        </Stack>
        <Stack sx={{ bgcolor: "white", mr: 3, borderRadius: 5, p: 2 }}>{children}</Stack>
      </Stack>
    </Stack>
  );
};

export default BaseLayout;
