import { defaultListboxReducer } from "@mui/base";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CreateIcon from "@mui/icons-material/Create";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ChatItem = (props) => {
  const { subject, text, mail } = props.ChatItemInfo;
  return (
    <Stack direction='row'>
      {mail === "satake.satake.y@gmail.com" && (
        <AccountCircleIcon fontSize='large' sx={{ mt: 3, mr: 2 }} />
      )}
      <Stack sx={{ border: 1, borderWidth: 1, borderRadius: 0.5, borderRadius: 3, p: 4 }}>
        <Stack direction='row' alignItems='center' spacing={1} sx={{ mb: 2 }}>
          <Typography variant='h6' sx={{ mr: 3 }}>
            {subject}
          </Typography>
          <CreateIcon fontSize='small' />
          <ContentCopyIcon fontSize='small' />
        </Stack>
        <Typography variant='body2'>{text}</Typography>
      </Stack>
      {mail !== "satake.satake.y@gmail.com" && (
        <AccountCircleIcon fontSize='large' sx={{ mt: 3, ml: 2 }} />
      )}
    </Stack>
  );
};

export default ChatItem;
