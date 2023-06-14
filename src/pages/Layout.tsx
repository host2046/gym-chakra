import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box margin={10}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
