// @ts-nocheck
import React from 'react';
import GlobalStyles from '../../../styles/GlobalStyles';

const GlobalLayout = ({ children }) => {
  return (
    <>
        <GlobalStyles />
        {children}
    </>
  )
}

export default GlobalLayout;