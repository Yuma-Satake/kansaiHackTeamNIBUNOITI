import { SignalCellularConnectedNoInternet4BarRounded } from "@mui/icons-material";
import axios from "axios";
import { useEffect } from "react";

const getMails = ()=>{
  const userId=localStorage.getItem("uid")
  const [mails,setMail] = useState(null)

  const instance = axios.create({
    baseURL: "https://gmail.googleapis.com/gmail",
  })

  const requests = {
    fetchMailList: `/v1/me/${userId}/messages`
  };
  
  useEffect(()=>{
    async function fetchData() {
    const response = await instance.get(requests.fetchMailList)
    setMail(response.data);
    }

    fetchData();
  },[]);

}

export default getMails