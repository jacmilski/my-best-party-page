// @ts-nocheck
import React from 'react';
import GlobalStyles from '../../../styles/GlobalStyles';
import Header from '../../arganisms/Header/Header';
import { StyledGlobalWrapper } from '../../../styles/sharedStyles';

const GlobalLayout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledGlobalWrapper>
        {children}
      </StyledGlobalWrapper>
    </>
  )
}

export default GlobalLayout;