import BaseLayout from "../Templates/BaseLayout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Button,
  Container,
  IconButton,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography
} from "@mui/material";
import { Stack } from "@mui/system";
import { useContext, useEffect, useState } from "react";
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
import { ModalStyle } from "../../style/ModalStyle";
import DeleteIcon from "@mui/icons-material/Delete";

const ChatPage = () => {
  const navigation = useNavigate();
  const { state: SelectThredId, setState: setSelectThredId } = useContext(SelectThredIdContext);
  const [ThredNumList, setThredNumList] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
  ]);
  const [ThredTitle, setThredTitle] = useState("スレッド名");
  const [InputOpen, setInputOpen] = useState(false);

  const [FromList, setFromList] = useState([]);
  const [SubjectList, setSubjectList] = useState([]);
  const [SnippetList, setSnippetList] = useState([]);
  const [EmailList, setEmailList] = useState([]);

  const [MailSubject, setMailSubject] = useState("");
  const [MailText, setMailText] = useState("");

  const [ModalOpen, setModalOpen] = useState(false);

  const [ThredId, setThredId] = useState(0);
  const [EditFlg, setEditFlg] = useState(false);

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

    const thredId = res.data.messages[0].threadId;
    setThredId(thredId);

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

  const SendMails = async () => {
    const recipient = FromList[0]; //送信先のメールアドレス
    const subject = MailSubject; //件名
    const body = MailText; //本文
    const from = myEmail;
    const threadid = ThredId; //スレッドID
    const judge = EditFlg ? 0 : 1; //消す消さない num（0:中止 1:通常送信 ）
    window.open(
      `https://script.google.com/macros/s/AKfycby8WE8DscDWr06hEuXkaRc6xLEfdSGZihR4KUL-80WR4MBFcZZ2PUV-V_v4-T-2cAT9/exec?to=${recipient}&subject=${subject}&text=${body}&from=${from}&threadid=${threadid}&judge=${judge}`
    );
    const SubjecTemp = [...SubjectList, subject];
    setSubjectList(SubjecTemp);

    const SnippetTemp = [...SnippetList, body];
    setSnippetList(SnippetTemp);

    const EmailTemp = [...EmailList, from];
    setEmailList(EmailTemp);

    setMailSubject("");
    setMailText("");
  };

  const EditMessage = (num) => {
    setMailSubject(SubjectList[num]);
    setMailText(SnippetList[num]);
    setInputOpen(true);
    setEditFlg(true);
  };

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
      <Stack spacing={5} sx={{ my: 5, mx: 8 }}>
        {ThredNumList.map((num) => {
          return (
            <Stack direction='row' key={num}>
              {String(EmailList[num]).indexOf(myEmail) === -1 && (
                <AccountCircleIcon fontSize='large' sx={{ mt: 3, mr: 2 }} />
              )}
              <Stack sx={{ border: 1, borderWidth: 1, borderRadius: 0.5, borderRadius: 3, p: 4 }}>
                <Stack direction='row' alignItems='center' spacing={1} sx={{ mb: 2 }}>
                  <Typography variant='h6' sx={{ mr: 3 }}>
                    {SubjectList[num]}
                  </Typography>
                  <CreateIcon fontSize='small' onClick={() => EditMessage(num)} />
                  <ContentCopyIcon
                    fontSize='small'
                    onClick={() => {
                      navigator.clipboard.writeText("コピーしました");
                    }}
                  />
                </Stack>
                <Typography variant='body2'>{SnippetList[num]}</Typography>
              </Stack>
              {String(EmailList[num]).indexOf(myEmail) > 0 ||
                (String(EmailList[num]) === myEmail && (
                  <AccountCircleIcon fontSize='large' sx={{ mt: 3, ml: 2 }} />
                ))}
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
              <Button
                sx={{ color: "secondary.light" }}
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                <HowToRegIcon />
                <Typography>テンプレート</Typography>
              </Button>
              <Button sx={{ color: "secondary.light", mr: 1 }}>
                <AttachFileIcon />
                <Typography>ファイル</Typography>
              </Button>
              <Button
                sx={{ color: "secondary.light" }}
                onClick={() => {
                  setMailSubject("");
                  setMailText("");
                }}
              >
                <DeleteIcon />
                <Typography>削除</Typography>
              </Button>
            </Stack>
            <Stack direction='column' spacing={4} sx={{ mt: 5 }}>
              <TextField
                variant='standard'
                label='件名'
                sx={{ width: "20em", color: "secondary.light" }}
                value={MailSubject}
                onChange={(e) => {
                  setMailSubject(e.target.value);
                }}
              />
              <Stack direction='row' alignItems='center'>
                <TextField
                  variant='standard'
                  label='本文'
                  multiline
                  sx={{ width: "70em", color: "secondary.light" }}
                  value={MailText}
                  onChange={(e) => {
                    setMailText(e.target.value);
                  }}
                />
                <Button sx={{ color: "secondary.light", ml: 3 }} onClick={SendMails}>
                  <SendIcon sx={{ mr: 1 }} />
                  {EditFlg === false ? (
                    <Typography variant='body1' noWrap={true}>
                      送信する
                    </Typography>
                  ) : (
                    <Typography variant='body1' noWrap={true}>
                      編集完了
                    </Typography>
                  )}
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

      <Modal
        open={ModalOpen}
        onClose={() => {
          setModalOpen(!ModalOpen);
        }}
      >
        <Container maxWidth='xs' sx={{ ...ModalStyle }}>
          <Stack sx={{ mx: 8 }} spacing={3}>
            <Typography variant='body1' sx={{ textAlign: "center" }}>
              テンプレートを選択する
            </Typography>
            <Select
              label='Age'
              value={MailText}
              onChange={(e) => {
                setMailText(e.target.value);
              }}
            >
              <MenuItem
                value={
                  "チームにぶんのいち様。ハッカソンの結果についてご通知させて頂きます。この度はチームにぶんのいちチーム様を優勝とさせて頂く運びとなりました。まずご連絡までよろしくお願い致します。"
                }
              >
                ハッカソン優勝のお知らせ
              </MenuItem>
              <MenuItem
                value={
                  "株式会社●●●●●●●●様お世話になっております。一般社団法人日本ビジネスメール協会の山田太郎です。先日はお時間いただきありがとうございます。次回の会議についてお知らせいたします。内容をご確認の上、ご出席をお願いいたします。日時：●●年●●月●●日（●曜日）●●時～●●時場所：貴社（第2会議室）参加者：貴社　●●部長、●●係長当協会　営業部●●、●●課題：●●●●備考：参加者の変更や不明点がありましたら山田までご連絡くださいよろしくお願いいたします。"
                }
              >
                会議の開催通知
              </MenuItem>
              <MenuItem
                value={
                  "株式会社●●●●●●●●様お世話になっております。一般社団法人日本ビジネスメール協会の山田太郎です。本日はお忙しい中、貴重なお時間をいただきありがとうございます。本日いただいた課題を確認の上、今週金曜日までに回答いたします。ご検討いただくにあたり、他に必要なものがありましたらお知らせください。貴社のお役に立てるよう全力で取り組みます。引き続きよろしくお願いいたします"
                }
              >
                訪問後のお礼
              </MenuItem>
              <MenuItem
                value={
                  "株式会社●●●●●●●●様お世話になっております。一般社団法人日本ビジネスメール協会の山田太郎です。●/●（●）開催「●●（セミナー名）」についてご連絡します。新型コロナウイルス感染症（COVID-19）の動向に鑑みて、セミナーの開催を中止させていただくことになりました。すでにお申し込みが完了している段階でのご連絡となり、大変恐縮ですがご理解いただけますと幸いです。今後の状況に応じて、あらためて企画を検討し、ご連絡します。ご迷惑をおかけして恐縮ですが、ご理解とご了承のほど、よろしくお願いいたします。"
                }
              >
                開催中止のお知らせ
              </MenuItem>
            </Select>
            {MailText !== "" && (
              <TextField
                value={MailText}
                multiline
                onChange={(e) => {
                  setMailText(e.target.value);
                }}
              />
            )}
            <Button
              variant='contained'
              sx={{ mb: 2 }}
              onClick={() => {
                setModalOpen(false);
              }}
            >
              決定
            </Button>
          </Stack>
        </Container>
      </Modal>
    </BaseLayout>
  );
};

export default ChatPage;
