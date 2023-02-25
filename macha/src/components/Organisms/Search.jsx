import { InputAdornment, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Search = () => {
  const [SearchInput, setSearchInput] = useState("メッセージを検索");
  return (
    <Stack sx={{ my: 4, ml: 1, mr: 5, bgcolor: "white", boxShadow: "2", borderRadius: 1 }}>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon sx={{ ml: 1 }} />
            </InputAdornment>
          )
        }}
        sx={{ width: "20em" }}
        value={SearchInput}
        onChange={(e) => {
          setSerchInput(e.target.value);
        }}
      />
    </Stack>
  );
};

export default Search;
