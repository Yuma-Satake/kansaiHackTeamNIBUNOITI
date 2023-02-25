import axios from "axios";
import { useEffect, useState } from "react";

const GetMails = () => {
  const userId = localStorage.getItem("uid");
  const [mails, setMail] = useState(null);

  useEffect(() => {
    const instance = axios.create({
      baseURL: "https://gmail.googleapis.com/gmail"
    });

    const requests = {
      fetchMailList: "/v1/me/messages"
    };

    const fetchData = async () => {
      const response = await instance.get(requests.fetchMailList);
      setMail(response.data);
      console.log(response);
    };
    fetchData();
  }, []);
};

export default GetMails;
