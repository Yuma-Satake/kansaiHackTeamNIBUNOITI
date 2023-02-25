import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../../util/firebase";
import * as React from 'react'
import { Box, Grid } from '@mui/material';
import { Toolbar } from "@mui/material";
import Button from '@mui/material/Button';
import { Stack } from "@mui/system";

function Login() {
  const loginInWithGoogle = async () => {
    const newProvider = provider.addScope("https://mail.google.com/");
    await signInWithRedirect(auth, newProvider);
  };
    const MaChaStyles = {
      fontWeight:"Bold",
      color:"primary.main",
      fontFamily:"Roboto",
      fontSize:20
    }
    const test ={
      width:"Auto",
      backgroundColor:"#A0DFDF",
      borderStartStartRadius:"20px",
      borderStartEndRadius:"20px",
      pt:"20px",
      mt:"-23.8px",
      pl:"20px",
      ml:"-39.7px",
      pb:"10px",
    }

    const buttonstyles = {
      width:250,
      fontSize:20,
      color:"#1F1F1F",
      backgroundColor:"#E8E8E8",
      padding:2,
      textTransform: "none",
      borderRadius:"30px",
    }
    const title ={
      width:"Auto",
      fontSize:40,
      fontWeight:"Bold",
      backgroundColor:"#FFFFFF",
      letterSpacing:3,
      lineHeight:1.5,
      borderRadius:"20px",
      paddingTop:3,
      paddingBottom:3,
    }
    const saleComplaints = {
        align:"center",
        width:"800px",
        fontSize:20,
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
    <fragment>
      <Toolbar>
      <Box component="img" alt='MaCha' src='./src/components/image/MaCha.png' width={90} sx={{mt:-3,mb:-2}}/>
      </Toolbar>
      <Box
        sx={{
            bgcolor:"primary.main",
            fontFamily:"Noto Sanz jp",
            padding:5,
        }}
      >
        <Box sx={title}>
          <Box component="img" alt='MaCha' src='./src/components/image/woman.png' width={300} align='right'/>
          <Grid sx={{ml:5}}>
            <Grid sx={test}>
              <Box>社会人がよく使うMail。</Box>
              <Box>煩わしいと思いませんか？</Box>
            </Grid>
            <Grid fontSize={20} sx={{mt:"10px"}}>
              <Stack direction={"row"}>
                <Box>今すぐ</Box><Box sx={MaChaStyles}>MaCha</Box><Box>で、Mailをチャット形式で送信・確認</Box>
              </Stack>
            </Grid>
              <Grid sx={{mt:2}}>
                <Button onClick={async () => await loginInWithGoogle()} style={buttonstyles}>Googleでログイン</Button>
              </Grid>
          </Grid>
        </Box>
        <Stack direction='row' alignItems='center'>
          <Grid sx={{paddingTop:"50px"}}>
            <Box component="img" alt="1" src="./src/components/image/1Star.png" width={120} sx={{ml:10}}/>
            <Box sx = {saleComplaints}>
              <Box align="center">メールを送信したけど、打ち間違いに後から気づいた……</Box>
              <Box align="center" fontWeight={"Bold"} >それ、MaChaなら解決できます!!!</Box>
              <Box align="center">MaChaなら、メールを送った後に編集できる。</Box>
            </Box>
          </Grid>
        </Stack>
        <Grid sx={{paddingTop:"50px",ml:"300px"}}>
          <Box component="img" alt="2" src="./src/components/image/2Star.png" width={120} sx={{ml:10}}/>
          <Box sx = {saleComplaints} >
            <Box align="center">メールを送信したけど、読んでくれたかどうか分からない……</Box>
            <Box align="center"fontWeight={"Bold"}>それ、MaChaなら解決できます!!!</Box>
            <Box align="center">MaChaなら、既読をチャット形式で確認。</Box>
          </Box>
        </Grid>
        <Grid sx={{paddingTop:"50px"}}>
          <Box component="img" alt="3" src="./src/components/image/3Star.png" width={120} sx={{ml:10}}/>
            <Box sx = {saleComplaints}>
            <Box align="center">メールを確認したいけど、履歴をさかのぼるのが大変……</Box>
            <Box align="center"fontWeight={"Bold"}>それ、MaChaなら解決できます!!!</Box>
            <Box align="center">MaChaなら、チャット形式でクリアな履歴。</Box>
          </Box>
        </Grid>
      </Box>
    </fragment>
  );
}

export default Login;