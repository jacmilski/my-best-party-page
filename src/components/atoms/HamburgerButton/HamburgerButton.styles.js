// @ts-nocheck
import styled from "styled-components";
import { focusVisibleStyles } from "../../../styles/sharedStyles";

export const StyledHamburgerButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: flex-end;
    margin-left: 100px; // do likwidacji

    @media only screen and (min-width: 768px) {
        display: none;
    }

    ${focusVisibleStyles};

`;

export const StyledHamburgerBox = styled.span`
    width: 100%;
    height: 100%;
    display: inline-block;
    position: relative;
`;
export const StyledHamburgerInner = styled.span`
    width: 36px;
    height: 3px;
    border-radius: 3px;
    position: absolute;
    left: 0;
    top: 50%;
    transition: background-color 250ms linear;
    background-color: ${({ $isOpen, $isBlack }) =>
        $isOpen ? 'transparent' : $isBlack ? 'var(--black)' : 'var(--white)'};
    
    
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 8px;
        width: ${({ $isOpen }) => $isOpen ? '36px' : '24px'};
        height: 3px;
        background-color: ${({ $isOpen, $isBlack }) =>
            $isOpen ? 'var(--black)' : $isBlack ? 'var(--black)' : 'var(--white)'};
        border-radius: 3px;
        transition: transform 250ms linear;
        transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'rotate(0)'};
    }

    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: -8px;
        width: 36px;
        height: 3px;
        background-color: ${({ $isOpen, $isBlack }) =>
            $isOpen ? 'var(--black)' : $isBlack ? 'var(--black)' : 'var(--white)'};
        border-radius: 3px;
        transition: transform 250ms linear;
        transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg) translate(5px, 4px)' : 'rotate(0)'};
    }
    
`;