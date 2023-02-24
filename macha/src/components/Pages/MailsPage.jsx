import { Stack } from "@mui/system";
import BaseLayout from "../Templates/BaseLayout";

const MailsPage = () => {
  return (
    <BaseLayout>
      <Stack sx={{ bgcolor: "white", mr: 3, borderRadius: 5, p: 2, height: "800px" }}>
        メイルズページ
      </Stack>
    </BaseLayout>
  );
};

export default MailsPage;