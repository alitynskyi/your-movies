import React from "react";

import Box from "@mui/material/Box";
import Header from "../Header";
import Footer from "../Footer";

interface PageBaseProps {
  children: React.ReactNode;
}

const PageBase: React.FC<PageBaseProps> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />

      <Box pt={13} flexGrow={1}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
};
export default PageBase;
