import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import NavBar from "../Organisms/NavBar";
import Search from "../Organisms/Search";

const BaseLayout = (props) => {
  const children = props.children;
  return (
    <Stack direction='row'>
      <Box sx={{ bgcolor: "#E8E8E8" }}>
        <NavBar />
      </Box>
      <Stack direction='column' sx={{ pl: 2, bgcolor: "primary.main" }}>
        <Stack direction='row'>
          <Search />
        </Stack>
        {children}
      </Stack>
    </Stack>
  );
};

export default BaseLayout;
