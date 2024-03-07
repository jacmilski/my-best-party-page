import styled, { css } from "styled-components";

const textStyles = css`
    color: var(--white);
    text-align: center;
    padding: 5px 23px;
`;


export const StyledHeroSection = styled.section`
    width: 100%;
    min-height: 100vh;
    max-height: 792px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const StyledImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .gatsby-image-wrapper { // klasa tworzona przez plugin gatsby-plugin-image
        width: 100%;
        height: 100%;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.56);
    }
`;

export const StyledContentWrapper = styled.div`
    position: relative;
    z-index: 1;
`;

export const StyledTitle = styled.h1`
    font-size: clamp(36px, 5vw, 72px);
    ${textStyles};
`;

export const StyledDesc = styled.p`
    font-size: clamp(16px, 1.667vw, 24px);
    ${textStyles};
`;