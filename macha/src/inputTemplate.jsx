import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const InputTemplate = () => {
  const first_template=["こんにちは","こんばんは","ありがとうございます","お世話になっております。\n株式会社 隣の人が疲れてすぎているの水崎です。"]
  const [templates,setTemplates] = useState(first_template);
  const [anchorEl, setAnchorEl] = useState(null);
  const [text,setText] = useState("");

  const open = Boolean(anchorEl);

  const handleChange = (e) => {
    console.log(e.target.value)
    setText(e.target.value);
    setAnchorEl(null);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Template</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={text}
          label="Template"
          onChange={handleChange}
        >
          {templates.map((template) => {
          return(
          <MenuItem key={template} value={template}>{template}</MenuItem>
          )
        }
        )}
        </Select>
      </FormControl>
    </div>
  );
}

export default InputTemplate;