import { Box, SxProps } from "@mui/material";
import MainPage from "../MainPage/MainPage";

const Layout = () => {
  return (
    <>
      <Box sx={MainLayout}>
        <MainPage />
      </Box>
    </>
  );
};

const MainLayout: SxProps = {
  backgroundColor: "#011114",
};

export default Layout;
