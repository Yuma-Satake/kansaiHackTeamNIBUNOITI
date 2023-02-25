import { Button } from "@mui/material";
import axios from "axios";

const PostMailpreTest = () => {
  const GetFunction = async () => {
    const email = "satake.satake.y@gmail.com";
    const to = "satake.satake.y@gmail.com";
    const subject = "テストメール";
    const text = "テストメールの本文";

    const res = await axios.get(
      `http://127.0.0.1:5001/macha-1993d/us-central1/postMail?from=${email}&to=${to}&subject=${subject}&text=${text}`
    );
    console.log(res);
  };
  return (
    <Button variant='contained' onClick={GetFunction}>
      メールを送信する
    </Button>
  );
};

export default PostMailpreTest;
