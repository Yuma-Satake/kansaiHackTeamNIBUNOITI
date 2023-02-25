import BaseLayout from "../Templates/BaseLayout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import ChatItem from "../Organisms/ChatItem";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { SelectThredIdContext, UserInfoContext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CreateIcon from "@mui/icons-material/Create";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ChatPage = () => {
  const navigation = useNavigate();
  const { state: SelectThredId, setState: setSelectThredId } = useContext(SelectThredIdContext);
  const [ThredNumList, setThredNumList] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
  ]);
  const [ThredListData, setThredListData] = useState([]);
  const [ThredTitle, setThredTitle] = useState("スレッド名");
  const [InputOpen, setInputOpen] = useState(false);

  const [FromList, setFromList] = useState([]);
  const [SubjectList, setSubjectList] = useState([]);
  const [SnippetList, setSnippetList] = useState([]);
  const [EmailList, setEmailList] = useState([]);

  const myEmail = localStorage.getItem("email");

  const GetThread = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(
      `https://gmail.googleapis.com/gmail/v1/users/me/threads/${SelectThredId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const emailList = res.data.messages.map((mail) => {
      return mail.payload.headers.filter((val) => {
        if (val.name === "From") {
          return val.value;
        }
      })[0].value;
    });
    console.log(emailList);
    setEmailList(emailList);

    const subjectList = res.data.messages.map((mail) => {
      return mail.payload.headers.filter((val) => {
        if (val.name === "Subject") {
          return val.value;
        }
      })[0].value;
    });
    setSubjectList(subjectList);

    const thredNumList = ThredNumList.filter((val) => {
      return val < res.data.messages.length;
    });
    setThredNumList(thredNumList);

    const snippetList = res.data.messages.map((mail) => {
      return mail.snippet;
    });
    setSnippetList(snippetList);

    const thredList = res.data.messages.map((mail) => {
      return mail.snippet;
    });

    const fromList = res.data.messages.map((mail) => {
      return mail.payload.headers.filter((val) => {
        if (val.name === "From") {
          return val.value;
        }
      })[0].value;
    });
    setFromList(fromList);

    // タイトル
    const thredTitle = res.data.messages.map((mail) => {
      return mail.payload.headers.filter((val) => {
        if (val.name === "Subject") {
          return val.value;
        }
      })[0].value;
    });
    setThredTitle(thredTitle);
  };

  useEffect(() => {
    GetThread();
  }, []);

  return (
    <BaseLayout>
      <Stack
        direction='row'
        alignItems='center'
        sx={{ borderBottom: 1, borderWidth: 0.5, pb: 3, mt: 1 }}
      >
        <IconButton
          onClick={() => {
            navigation("/MailsPage");
          }}
        >
          <ArrowBackIcon sx={{ mr: 3, ml: 3, mt: 0.7 }} />
        </IconButton>
        <Typography variant='h5'>{FromList[0]}</Typography>
      </Stack>
      <Stack spacing={5} sx={{ my: 5, mx: 10 }}>
        {ThredNumList.map((num) => {
          return (
            <Stack direction='row'>
              {String(EmailList[num]).indexOf(myEmail) === -1 && (
                <AccountCircleIcon fontSize='large' sx={{ mt: 3, mr: 2 }} />
              )}
              <Stack sx={{ border: 1, borderWidth: 1, borderRadius: 0.5, borderRadius: 3, p: 4 }}>
                <Stack direction='row' alignItems='center' spacing={1} sx={{ mb: 2 }}>
                  <Typography variant='h6' sx={{ mr: 3 }}>
                    {SubjectList[num]}
                  </Typography>
                  <CreateIcon fontSize='small' />
                  <ContentCopyIcon fontSize='small' />
                </Stack>
                <Typography variant='body2'>{SnippetList[num]}</Typography>
              </Stack>
              {String(EmailList[num]).indexOf(myEmail) > 0 && (
                <AccountCircleIcon fontSize='large' sx={{ mt: 3, ml: 2 }} />
              )}
            </Stack>
          );
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
