// @ts-nocheck
import React, { useState } from 'react';
import { StyledHeader, StyledLogo } from './Header.styles';
import Nav from '../Nav/Nav';
import HamburgerButton from '../../atoms/HamburgerButton/HamburgerButton';
import Logo from '../../atoms/Icons/Logo';
// import { useLocation } from '@reach/router';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    // const location = useLocation();

    const isOurRealizationPage = true;
        // location.pathname === '/nasze_realizacje/' ||
        // location.pathname.includes('/realizacja/')

    // console.log(location.pathname);

    return (
        <StyledHeader>
            <StyledLogo to='/'>
                <Logo isBlack={isOurRealizationPage} />
            </StyledLogo>
            <Nav isBlack={isOurRealizationPage} isOpen={isOpen} />
            <HamburgerButton
                isBlack={isOurRealizationPage}
                isOpen={isOpen}
                menuOpen={(prev) => setIsOpen(!prev)}
            />
        </StyledHeader>
    )
}

export default Header;