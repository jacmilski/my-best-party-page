// @ts-nocheck
import React from "react";
import GlobalStyles from "../../../styles/GlobalStyles";
import Header from "../../arganisms/Header/Header";
import { StyledGlobalWrapper } from "../../../styles/sharedStyles";
import Footer from "../../molecules/Footer/Footer";

const GlobalLayout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledGlobalWrapper>
        {children}
        <Footer />
      </StyledGlobalWrapper>
    </>
  );
};

export default GlobalLayout;
