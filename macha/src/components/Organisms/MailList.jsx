import React, { useState } from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Stack from "@mui/material/Stack";

const getMails = [
  {
    id: 1,
    name: "みず",
    title: "環境構築できました",
    description:
      "株式会社〇〇\n△△部◇◇◇◇様初めてご連絡いたします。■■■の開発、生産をしております。株式会社●●営業部の◆◆と申します。\nこのたび、ぜひ弊社の製品をサンプルとして\n◇◇様にお使いいただけないかと思いご連絡いたしました。"
  },
  {
    id: 2,
    name: "うっちー",
    title: "遅刻してすみません",
    description:
      "株式会社〇〇\n△△部◇◇◇◇様初めてご連絡いたします。■■■の開発、生産をしております。株式会社●●営業部の◆◆と申します。\nこのたび、ぜひ弊社の製品をサンプルとして\n◇◇様にお使いいただけないかと思いご連絡いたしました。"
  },
  {
    id: 3,
    name: "みず",
    title: "環境構築できました",
    description:
      "株式会社〇〇\n△△部◇◇◇◇様初めてご連絡いたします。■■■の開発、生産をしております。株式会社●●営業部の◆◆と申します。\nこのたび、ぜひ弊社の製品をサンプルとして\n◇◇様にお使いいただけないかと思いご連絡いたしました。"
  },
  {
    id: 4,
    name: "うっちー",
    title: "遅刻してすみません",
    description:
      "株式会社〇〇\n△△部◇◇◇◇様初めてご連絡いたします。■■■の開発、生産をしております。株式会社●●営業部の◆◆と申します。\nこのたび、ぜひ弊社の製品をサンプルとして\n◇◇様にお使いいただけないかと思いご連絡いたしました。"
  },
  {
    id: 5,
    name: "みず",
    title: "環境構築できました",
    description:
      "株式会社〇〇\n△△部◇◇◇◇様初めてご連絡いたします。■■■の開発、生産をしております。株式会社●●営業部の◆◆と申します。\nこのたび、ぜひ弊社の製品をサンプルとして\n◇◇様にお使いいただけないかと思いご連絡いたしました。"
  }
];

const MailList = () => {
  const [mails, setMails] = useState(getMails);

  return (
    <Box sx={{ m: 1 }}>
      {mails.map((mail) => (
        <Stack
          key={mail.id}
          sx={{ mb: 3, border: 1, borderRadius: 2, borderColor: "#1f1f1f", py: 3, pl: 3 }}
          direction='row'
        >
          <Grid item xs={11} container>
            <Grid item xs={3} sx={{ mr: 1 }}>
              <Box sx={{ mb: 1 }}>
                <Typography variant='h5' sx={{ fontWeight: "bold" }}>
                  {mail.name}
                </Typography>
              </Box>
              <Box>
                <Typography variant='body1'>{mail.title}</Typography>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box>
                <Typography variant='body2'>{mail.description}</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid xs={1} container alignItems='center' justify='center' sx={{ ml: 4 }}>
            <Grid item>
              <ArrowForwardIosIcon color='disabled' />
            </Grid>
          </Grid>
        </Stack>
      ))}
    </Box>
  );
};

export default MailList;
