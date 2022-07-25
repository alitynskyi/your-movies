import React from "react";

import Header from "../Header";
import Footer from "../Footer";

interface PageBaseProps {
  children: React.ReactNode;
}

const PageBase: React.FC<PageBaseProps> = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};
export default PageBase;