import styled from "styled-components";

export const StyledListSection = styled.section`
    width: 100%;

    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        margin-top: 84px;
        position: relative;
    }
`;

export const StyledCircleWrapper = styled.div`
    display: none;

    @media only screen and (min-width: 768px) {
        display: block;
        position: absolute;
        top: 50%;
        z-index: -1;
        transform: translateY(-50%);
        left: -15%;
    }
`;

export const StyledImageWrapper = styled.div`
    @media only screen and (min-width: 768px) {
        width: 50%;
        display: flex;
        padding-right: 51px;
        justify-content: flex-end;
    }
`;

export const StyledTextWrapper = styled.div`
    padding: 17px 23px;

    @media only screen and (min-width: 768px) {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: clamp(60px, 6.25vw, 120px);
    }
`;

export const StyledList = styled.ul`
    margin: 17px 0 0 4px;

    li {
        font-size: clamp(18px, 1.25vw, 24px);
    }
`;
