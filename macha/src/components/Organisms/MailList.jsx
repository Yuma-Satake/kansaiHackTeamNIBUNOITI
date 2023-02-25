import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Stack from "@mui/material/Stack";
import { MailListContext, SelectThredIdContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const MailList = () => {
  const navigation = useNavigate();
  const { state: MailListData, setState: setMailListData } = useContext(MailListContext);
  const { state: SelectThredId, setState: setSelectThredId } = useContext(SelectThredIdContext);
  const [FromList, setFromList] = useState([]);
  const [SubjectList, setSubjectList] = useState([]);
  const [SnippetList, setSnippetList] = useState([]);
  const [ThreadIdList, setThreadIdList] = useState([]);

  const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

  const GetMailList = async () => {
    try {
      const token = localStorage.getItem("token");
      const res1 = await axios.get(
        "https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=20",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const MailIdList = res1.data.messages.map((MailObj) => {
        return MailObj.id;
      });

      const GetMailDetail = async (MailId) => {
        const MailDetail = await axios.get(
          `https://gmail.googleapis.com/gmail/v1/users/me/messages/${MailId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        return MailDetail;
      };

      // subjet
      const res2 = MailIdList.map((MailId) => {
        return GetMailDetail(MailId);
      });
      const res3 = await Promise.all(res2);
      const res4 = res3.map((resItem) => {
        return resItem.data;
      });
      setMailListData(res4);
      return res4;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    GetMailList().then((val) => {
      const fromList = val.map((mail) => {
        return mail.payload.headers.filter((val) => {
          if (val.name === "From") {
            return val.value;
          }
        })[0].value;
      });

      const subjectList = val.map((mail) => {
        return mail.payload.headers.filter((val) => {
          if (val.name === "Subject") {
            return val.value;
          }
        })[0].value;
      });

      const snippetList = val.map((mail) => {
        return mail.snippet;
      });

      const threadList = val.map((mail) => {
        return mail.threadId;
      });

      setFromList(fromList);
      setSubjectList(subjectList);
      setSnippetList(snippetList);
      setThreadIdList(threadList);
    });
  }, []);

  return (
    <Stack justifyContent='center' sx={{ m: 1 }}>
      {numList.lenght !== 0 ? (
        numList.map((num) => {
          return (
            <Button
              sx={{ color: "secondary.light", mb: 3 }}
              onClick={() => {
                setSelectThredId(ThreadIdList[num]);
                navigation("/ChatPage");
              }}
            >
              <Stack
                direction='row'
                alignItems='center'
                sx={{
                  border: 1,
                  borderRadius: 2,
                  borderColor: "#1f1f1f",
                  py: 3,
                  pl: 3,
                  width: "850px"
                }}
              >
                <Stack spacing={2} alignItems='flex-start'>
                  <Typography variant='h6' sx={{ fontWeight: "bold" }}>
                    {FromList[num]}
                  </Typography>
                  <Typography variant='body1'>{SubjectList[num]}</Typography>
                  <Typography variant='body2'>{SnippetList[num]}</Typography>
                </Stack>
                <ArrowForwardIosIcon color='disabled' sx={{ mx: 3 }} />
              </Stack>
            </Button>
          );
        })
      ) : (
        <p>error</p>
      )}
    </Stack>
  );
};

export default MailList;
