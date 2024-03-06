// @ts-nocheck
import React, { useState } from 'react';
import { StyledHamburgerBox, StyledHamburgerButton, StyledHamburgerInner } from './HamburgerButton.styles';

const HamburgerButton = ({ openMenu, isOpen, isBlack }) => {

    return (
        <StyledHamburgerButton
            aria-label="Otwórz menu"
            onClick={openMenu}
            $isOpen={isOpen}
        >
            <StyledHamburgerBox>
                <StyledHamburgerInner $isOpen={isOpen} $isBlack={isBlack}>

                </StyledHamburgerInner>
            </StyledHamburgerBox>
        </StyledHamburgerButton>
    )
};

export default HamburgerButton;