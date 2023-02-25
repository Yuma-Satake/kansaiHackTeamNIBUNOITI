import * as React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Toolbar, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

function LandingPage() {
  return (
    <CssBaseline>
      <Toolbar>
        <Box
          component='img'
          alt='MaCha'
          src='./src/assets/logo.png'
          width={90}
          sx={{ mt: -3, mb: -2 }}
        />
      </Toolbar>
      <Box
        sx={{
          bgcolor: "#B0DC64",
          padding: 5
        }}
      >
        <Box
          sx={{
            width: "Auto",
            fontSize: 40,
            backgroundColor: "#FFFFFF",
            padding: 2
          }}
        >
          <Box component='img' alt='MaCha' src='./src/assets/human.png' width={300} align='right' />
          <Box
            sx={{
              ml: 5
            }}
          >
            <Box>社会人がよく使うGmail。</Box>
            <Box>煩わしいと思いませんか？</Box>
            <Box fontSize={20} sx={{ mb: 4 }}>
              MaChaなら、Mailをチャット形式で送信・確認
            </Box>
          </Box>
          <Typography align='center'>
            <Box
              sx={{
                width: 200,
                fontSize: 20,
                backgroundColor: "#D9D9D9",
                padding: 1,
                borderRadius: 10,
                ml: 15
              }}
            >
              <Link color='#000000' href='ここにリンク'>
                サインイン
              </Link>
            </Box>
          </Typography>
        </Box>

        <Box component='img' alt='1' src='./src/assets/star1.png' width={120} sx={{ ml: 10 }} />
        <Box
          sx={{
            align: "center",
            width: "Auto",
            fontSize: 24,
            lineHeight: 2.5,
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            padding: 3,
            boxShadow: [0, 4, 0, 0],
            mt: -5,
            ml: 5,
            mr: 5
          }}
        >
          <Box align='center'>メールを送信したけど、打ち間違いに後から気づいた……</Box>
          <Box align='center'>それ、MaChaなら解決できます!</Box>
          <Box align='center'>MaChaなら、メールを送った後に編集できる。</Box>
        </Box>

        <Box component='img' alt='2' src='./src/assets/star2.png' width={120} sx={{ ml: 10 }} />
        <Box
          sx={{
            align: "center",
            width: "Auto",
            fontSize: 24,
            lineHeight: 2.5,
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            padding: 3,
            boxShadow: [0, 4, 0, 0],
            mt: -5,
            ml: 5,
            mr: 5
          }}
        >
          <Box align='center'>メールを送信したけど、読んでくれたかどうか分からない……</Box>
          <Box align='center'>それ、MaChaなら解決できます!</Box>
          <Box align='center'>MaChaなら、既読をチャット形式で確認。</Box>
        </Box>

        <Box component='img' alt='3' src='./src/assets/star3.png' width={120} sx={{ ml: 10 }} />
        <Box
          sx={{
            align: "center",
            width: "Auto",
            fontSize: 24,
            lineHeight: 2.5,
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            padding: 3,
            boxShadow: [0, 4, 0, 0],
            mt: -5,
            ml: 5,
            mr: 5
          }}
        >
          <Box align='center'>メールを確認したいけど、履歴をさかのぼるのが大変……</Box>
          <Box align='center'>それ、MaChaなら解決できます!</Box>
          <Box align='center'>MaChaなら、チャット形式でクリアな履歴。</Box>
        </Box>
      </Box>
    </CssBaseline>
  );
}

export default LandingPage;
