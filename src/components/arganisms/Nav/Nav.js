// @ts-nocheck
import React from 'react'
import { StyledNav } from './Nav.styles';
import Link from '../../atoms/Link/Link';
import { navLabels } from './Nav.data';

const Nav = ({ isOpen, isBlack }) => {

    const isBlackClassName = isBlack
        ? 'color--always-black'
        : isOpen ? 'color--black' : null;

    return (
        <StyledNav
            $isOpen={isOpen}
        >
            <Link
                url='/kontakt'
                className={isBlackClassName}
            >
                {navLabels.CONTACT}
            </Link>
            <Link
                url='/nasze_realizacje'
                className={isBlackClassName}
            >
                {navLabels.REALIZATIONS}
            </Link>
        </StyledNav>
    )
}

export default Nav;