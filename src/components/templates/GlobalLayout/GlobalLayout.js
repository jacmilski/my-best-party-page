// @ts-nocheck
import React from 'react';
import GlobalStyles from '../../../styles/GlobalStyles';
import Header from '../../arganisms/Header/Header';

const GlobalLayout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  )
}

export default GlobalLayout;