import { Stack, TextField } from "@mui/material";

const Search = () => {
  return (
    <Stack sx={{ my: 3, ml: 1, mr: 3, bgcolor: "white", boxShadow: "2", borderRadius: 1 }}>
      <TextField label='メッセージを検索' />
    </Stack>
  );
};

export default Search;
