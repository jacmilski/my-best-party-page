import { Link } from "gatsby";
import styled from "styled-components";

export const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    max-width: 1920px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 23px;
    z-index: 999;

`;

export const StyledLogo = styled(Link)``;