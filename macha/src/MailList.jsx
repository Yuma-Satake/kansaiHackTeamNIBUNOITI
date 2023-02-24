import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Stack from '@mui/material/Stack';


const getMails = [
  {
    name: "みず",
    title: "環境構築できました",
    description:
      "株式会社〇〇\n△△部\◇◇◇◇様\初めてご連絡いたします。\■■■の開発、生産をしております。\株式会社●●営業部の◆◆と申します。\nこのたび、ぜひ弊社の製品をサンプルとして\n◇◇様にお使いいただけないかと思いご連絡いたしました。",
  },
  {
    name: "うっちー",
    title: "遅刻してすみません",
    description:
      "株式会社〇〇\n△△部\◇◇◇◇様\初めてご連絡いたします。\■■■の開発、生産をしております。\株式会社●●営業部の◆◆と申します。\nこのたび、ぜひ弊社の製品をサンプルとして\n◇◇様にお使いいただけないかと思いご連絡いたしました。",
  },
  {
    name: "たいせい",
    title: "Firebaseは任せてください",
    description:
      "実業界の大立者である羽柴壮太郎の家に世間で噂の盗賊「怪人二十面相」からロマノフ王家に伝わる宝石を狙った予告状が届いていた。一方で家出をして南洋に渡った羽柴家の長男壮一が10年以上を経て帰国した。しかし、ロマノフ王家の宝石は奪われてしまい、さらに次男の壮二を誘拐されることに。",
  },
];

const MailList = () => {
  const [mails,setMails] = useState(getMails);

  const [sendMails, setBookId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Box sx={{ m: 2 }}>
      {mails.map((mail) => (
        <Stack sx={{ m: 2 , border: 1, borderRadius: 2, p:2}} direction="row">
          <Grid xs={11} container>   
            <Grid item xs={3} >
              <Box> 
                <Typography variant="h5">
                {mail.name}
                </Typography>
              </Box>
              <Box> 
                <Typography variant="subtitle1">
                {mail.title}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={8} >
              <Box> 
                <Typography variant="body2">
                {mail.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid xs={1} container alignItems="center" justify="center">
            <Grid item>
              <ArrowForwardIosIcon color="disabled"></ArrowForwardIosIcon>
            </Grid>
          </Grid>
        </Stack>
      ))};
    </Box>
  );
};

export default MailList;