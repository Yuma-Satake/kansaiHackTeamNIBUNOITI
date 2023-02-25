import { Button } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import {db} from "./util/firebase"

const SetMail = () => {
  const handleClick = async() => {
  const time_ID="202302251730";
  const random_ID = Math.random().toString(32).substring(2);
  const message = {
    from: "xxx@gmail.com",
    to: "yyy@gamil.com",
    subject: "タイトル",
    text: "本文",
  }
    const mailRef = doc(db, 'UpdateMail', 'v1',time_ID,random_ID);
    await setDoc(mailRef, message);
  }
  return(
    <Button variant="contained" onClick={handleClick}>Contained</Button>
  )
}

export default SetMail