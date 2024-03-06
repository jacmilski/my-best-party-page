// @ts-nocheck
import React from 'react'
import { StyledLink } from './Link.styles';

const Link = ({ url, children, ariaLabel, className }) =>
    <StyledLink
        to={url}
        aria-label={ariaLabel}
        className={className}
    >
        {children}
    </StyledLink>;

export default Link;