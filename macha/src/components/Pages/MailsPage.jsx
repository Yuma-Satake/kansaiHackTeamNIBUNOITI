import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import { useEffect } from "react";
import Login2 from "../../firebase/login2";
import GetMails from "../../mail/getMails";
import { GmailAxios } from "../../util/axiosUtil";
import MailList from "../Organisms/MailList";
import BaseLayout from "../Templates/BaseLayout";

const MailsPage = () => {
  const GetMails = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("https://gmail.googleapis.com/gmail/v1/users/me/messages", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(res.data);
  };

  return (
    <BaseLayout>
      <Stack sx={{ bgcolor: "white", mr: 3, borderRadius: 5, p: 2, height: "800px" }}>
        {/* <MailList /> */}
        <Button variant='contained' onClick={GetMails}>
          メール取得
        </Button>
        <Login2 />
      </Stack>
    </BaseLayout>
  );
};

export default MailsPage;
