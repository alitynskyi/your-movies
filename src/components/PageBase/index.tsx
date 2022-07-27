import React from "react";

import Box from "@mui/material/Box";
import Header from "../Header";
import Footer from "../Footer";

interface PageBaseProps {
  children: React.ReactNode;
}

const PageBase: React.FC<PageBaseProps> = ({ children }) => {
  return (
    <>
      <Header />

      <Box pt={13}>{children}</Box>

      <Footer />
    </>
  );
};
export default PageBase;
