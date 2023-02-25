import { Button } from "@mui/material";

const GetMails = async () => {
  const token = localStorage.getItem("token");
  const res = await GmailAxios.get("/gmail/v1/users/me/messages", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  console.log(res.data);

  return <Button variant='contained'>メール受信</Button>;
};

export default GetMails;
