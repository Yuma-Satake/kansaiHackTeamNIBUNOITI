import Button from "@mui/material/Button";
import { db } from "./util/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const WriteMail = () => {
  const from = "aaa@gmail.com";
  const subject = "title";
  const text = "xoxo";
  const to = "bbb@gmail.com";
  const handleClick = async () => {
    if (from !== null && to !== null) {
      const collectionRef = await collection(db, "TestMails");
      await addDoc(collectionRef, {
        from: from,
        subject: subject,
        text: text,
        to: to
      });
    }
  };
  return (
    <Button variant='contained' onClick={handleClick}>
      Contained
    </Button>
  );
};

export default WriteMail;
