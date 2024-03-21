// @ts-nocheck
import React from 'react'
import { StyledNav } from './Nav.styles';
import Link from '../../atoms/Link/Link';
import { navLabels } from './Nav.data';

const Nav = ({ isOpen, isBlack, setIsOpen }) => {

    const isBlackClassName = isBlack
        ? 'color--always-black'
        : isOpen ? 'color--black' : null;

        console.log(typeof setIsOpen); // czemu jest undefined


    return (
        <StyledNav
            $isOpen={isOpen}
        >
            <Link
                url='/kontakt'
                className={isBlackClassName}
                onClick={
                    () => setIsOpen(false)
                }
            >
                {navLabels.CONTACT}
            </Link>
            <Link
                url='/nasze_realizacje'
                className={isBlackClassName}
                onClick={() => setIsOpen(false)}
            >
                {navLabels.REALIZATIONS}
            </Link>
        </StyledNav>
    )
}

export default Nav;

/* TU JEST OK */