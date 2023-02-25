import BaseLayout from "../Templates/BaseLayout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import ChatItem from "../Organisms/ChatItem";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";

const ChatPage = () => {
  const ChatList = [
    {
      id: 1,
      subject: "宿泊について",
      text: "宿泊についてワクチンの接種証明が必要ですので必ずお持ちください宿泊についてワクチンの接種証明が必要ですので必ずお持ちください",
      mail: "satous.y@icloud.com"
    },
    {
      id: 2,
      subject: "宿泊について",
      text: "宿泊についてワクチンの接種証明が必要ですので必ずお持ちください宿泊についてワクチンの接種証明が必要ですので必ずお持ちください",
      mail: "satake.satake.y@gmail.com"
    },
    {
      id: 3,
      subject: "宿泊について",
      text: "宿泊についてワクチンの接種証明が必要ですので必ずお持ちください宿泊についてワクチンの接種証明が必要ですので必ずお持ちください",
      mail: "satous.y@icloud.com"
    }
  ];

  const [ThredTitle, setThredTitle] = useState("BON京都");
  const [InputOpen, setInputOpen] = useState(false);

  return (
    <BaseLayout>
      <Stack
        direction='row'
        justifyItems='center'
        sx={{ borderBottom: 1, borderWidth: 0.5, pb: 3, mt: 1 }}
      >
        <ArrowBackIcon sx={{ mr: 3 }} />
        <Typography variant='h5'>{ThredTitle}</Typography>
      </Stack>
      <Stack spacing={5} sx={{ my: 5, mx: 10 }}>
        {ChatList.map((ChatItemInfo) => {
          return <ChatItem key={ChatItemInfo.id} ChatItemInfo={ChatItemInfo} />;
        })}
      </Stack>
      <Stack
        direction='row'
        alignItems='center'
        sx={{ bgcolor: "secondary.main", borderRadius: 3, p: 3 }}
      >
        {InputOpen ? (
          <Stack>
            <Stack direction='row' alignItems='center'>
              <IconButton
                sx={{ mr: 5 }}
                onClick={() => {
                  setInputOpen(false);
                }}
              >
                <ExpandMoreIcon fontSize='large' />
              </IconButton>
              <Button sx={{ color: "secondary.light" }}>
                <HowToRegIcon />
                <Typography>署名</Typography>
              </Button>
              <Button sx={{ color: "secondary.light" }}>
                <AttachFileIcon />
                <Typography>ファイル</Typography>
              </Button>
            </Stack>
            <Stack direction='column' spacing={4} sx={{ mt: 5 }}>
              <TextField
                variant='standard'
                label='件名'
                sx={{ width: "20em", color: "secondary.light" }}
              />
              <Stack direction='row' alignItems='center'>
                <TextField
                  variant='standard'
                  label='本文'
                  multiline
                  sx={{ width: "60em", color: "secondary.light" }}
                />
                <Button sx={{ color: "secondary.light", ml: 3 }}>
                  <SendIcon sx={{ mr: 1 }} />
                  <Typography>送信する</Typography>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        ) : (
          <Button
            sx={{ color: "secondary.light" }}
            onClick={() => {
              setInputOpen(true);
            }}
          >
            <ExpandLessIcon fontSize='large' sx={{ mr: 2 }} />
            <Typography variant='h6'>新しいメールを作成する</Typography>
          </Button>
        )}
      </Stack>
    </BaseLayout>
  );
};

export default ChatPage;
