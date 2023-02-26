import * as React from "react";
import { Box, Grid } from "@mui/material";
import { Toolbar } from "@mui/material";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import SendLogin from "../../firebase/SendLogin";

function Login() {
  const MaChaStyles = {
    fontWeight: "Bold",
    color: "primary.dark",
    fontFamily: "Roboto",
    fontSize: 20
  };
  const test = {
    width: "Auto",
    backgroundColor: "#A0DFDF",
    borderStartStartRadius: "20px",
    borderStartEndRadius: "20px",
    pt: 5,
    mt: -10,
    pl: "40px",
    ml: "-39.7px",
    pb: 3.5
  };
  const buttonstyles = {
    width: 250,
    fontSize: 20,
    color: "#1F1F1F",
    backgroundColor: "#E8E8E8",
    padding: 8,
    textTransform: "none",
    borderRadius: "10px"
  };
  const title = {
    width: "Auto",
    fontSize: 40,
    fontWeight: "Bold",
    backgroundColor: "#FFFFFF",
    letterSpacing: 3,
    lineHeight: 1.5,
    borderRadius: "20px",
    paddingTop: 10,
    paddingBottom: 3
  };
  const saleComplaints = {
    align: "center",
    width: "800px",
    fontSize: 20,
    lineHeight: 2.5,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 3,
    boxShadow: [0, 4, 0, 0],
    mt: -5,
    ml: 5,
    mr: 5
  };

  return (
    <>
      <Toolbar>
        <Box
          component='img'
          alt='MaCha'
          src='./src/assets/logo.png'
          width={200}
          sx={{ mt: -3, mb: -2, ml: 6, my: 3 }}
        />
      </Toolbar>
      <Box
        sx={{
          bgcolor: "primary.main",
          fontFamily: "Noto Sanz jp",
          padding: 5,
          flexBasis: true
        }}
      >
        <Box sx={title}>
          <Grid sx={{ ml: 5 }}>
            <Box
              component='img'
              alt='human'
              src='./src/assets/human.png'
              width={500}
              sx={{ mr: 20, mt: -3 }}
              align='right'
            />
            <Grid sx={test}>
              <Box>社会人がよく使うMail。</Box>
              <Box>煩わしいと思いませんか？</Box>
            </Grid>
            <Grid fontSize={20} sx={{ mt: "10px" }}>
              <Stack direction={"row"} sx={{ mt: 3 }}>
                <Box>今すぐ</Box>
                <Box sx={MaChaStyles}>MaCha</Box>
                <Box>で、Mailをチャット形式で送信・確認</Box>
              </Stack>
            </Grid>
            <Grid sx={{ mt: 2 }}>
              <Button onClick={async () => await SendLogin()} style={buttonstyles}>
                Googleでログイン
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Stack direction='row' alignItems='center'>
          <Grid sx={{ paddingTop: "50px" }}>
            <Box component='img' alt='1' src='./src/assets/star1.png' width={120} sx={{ ml: 10 }} />
            <Box sx={saleComplaints}>
              <Box align='center'>メールを送信したけど、打ち間違いに後から気づいた……</Box>
              <Box align='center' fontWeight={"Bold"}>
                それ、MaChaなら解決できます!!!
              </Box>
              <Box align='center'>MaChaなら、メールを送った後に編集できる。</Box>
            </Box>
          </Grid>
        </Stack>
        <Grid sx={{ paddingTop: "50px", ml: "500px" }}>
          <Box component='img' alt='2' src='./src/assets/star2.png' width={120} sx={{ ml: 10 }} />
          <Box sx={saleComplaints}>
            <Box align='center'>メールを送信したけど、読んでくれたかどうか分からない……</Box>
            <Box align='center' fontWeight={"Bold"}>
              それ、MaChaなら解決できます!!!
            </Box>
            <Box align='center'>MaChaなら、既読をチャット形式で確認。</Box>
          </Box>
        </Grid>
        <Grid sx={{ paddingTop: "50px", ml: "1000px" }}>
          <Box component='img' alt='3' src='./src/assets/star3.png' width={120} sx={{ ml: 10 }} />
          <Box sx={saleComplaints}>
            <Box align='center'>メールを確認したいけど、履歴をさかのぼるのが大変……</Box>
            <Box align='center' fontWeight={"Bold"}>
              それ、MaChaなら解決できます!!!
            </Box>
            <Box align='center'>MaChaなら、チャット形式でクリアな履歴。</Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default Login;
