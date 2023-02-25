import * as React from "react";
import { signInWithRedirect, getRedirectResult } from "firebase/auth";
import Box from "@mui/material/Box";
import { Toolbar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { auth, provider } from "../util/firebase";
import Button from '@mui/material/Button';

function LandingPage() {
  const loginInWithGoogle = async () => {
    const newProvider = provider.addScope("https://mail.google.com/");
    await signInWithRedirect(auth, newProvider);
  };
    const Loginbuttonstyles = {
      width:250,
      fontSize:20,
      color:"#000000",
      backgroundColor:"#D9D9D9",
      padding:2,
      borderRadius:30,
    }
    const saleComplaints = {
        align:"center",
        width:"Auto",
        fontSize:24,
        lineHeight:2.5,
        backgroundColor:"#FFFFFF",
        borderRadius:20,
        padding:3,
        boxShadow:[0,4,0,0],
        mt:-5,
        ml:5,
        mr:5,
    }

  return(
    <CssBaseline>
      <Toolbar>
      <Box component="img" alt='MaCha' src='./src/assets/logo.png' width={90} sx={{mt:-3,mb:-2}}/>
      </Toolbar>
      <Box
        sx={{
            bgcolor:"#B0DC64",
            padding:5,
        }}
      >
        <Box
            sx={{
              width:"Auto",
              fontSize:40,
              backgroundColor:"#FFFFFF",
              padding:2,
            }}
        >
          <Box component="img" alt='MaCha' src='./src/assets/human.png' width={300} align='right'/>
          <Box sx={{ml:5}}>
            <Box>社会人がよく使うMail。</Box>
            <Box>煩わしいと思いませんか？</Box>
            <Box fontSize={20}>MaChaなら、Mailをチャット形式で送信・確認</Box>
            <Button onClick={async () => await loginInWithGoogle()} style={Loginbuttonstyles}>Googleでログイン</Button>
          </Box>
        </Box>
        <Box component="img" alt="1" src="./src/assets/1Star.png" width={120} sx={{ml:10}}/>
          <Box sx = {saleComplaints}>
          <Box align="center">メールを送信したけど、打ち間違いに後から気づいた……</Box>
          <Box align="center">それ、MaChaなら解決できます!</Box>
          <Box align="center">MaChaなら、メールを送った後に編集できる。</Box>
        </Box>

        <Box component="img" alt="2" src="./src/assets/2Star.png" width={120} sx={{ml:10}}/>
          <Box sx = {saleComplaints} >
          <Box align="center">メールを送信したけど、読んでくれたかどうか分からない……</Box>
          <Box align="center">それ、MaChaなら解決できます!</Box>
          <Box align="center">MaChaなら、既読をチャット形式で確認。</Box>
        </Box>

        <Box component="img" alt="3" src="./src/assets/3Star.png" width={120} sx={{ml:10}}/>
          <Box sx = {saleComplaints}>
          <Box align="center">メールを確認したいけど、履歴をさかのぼるのが大変……</Box>
          <Box align="center">それ、MaChaなら解決できます!</Box>
          <Box align="center">MaChaなら、チャット形式でクリアな履歴。</Box>
        </Box>
      </Box>
    </CssBaseline>
  );
}

export default LandingPage;