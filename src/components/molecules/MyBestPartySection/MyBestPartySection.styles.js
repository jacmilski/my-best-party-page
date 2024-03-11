import styled from "styled-components";

export const StyledMyPartySection = styled.section`
    width: 100%;
    padding: 60px 0;

    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        padding-left: 59px;
        gap: clamp(30px, 3.125vw, 60px);
    }
`;

export const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 40px;

    @media only screen and (min-width: 768px) {
        align-items: flex-start;
    }
`;

export const StyledImageWrapper = styled.div`
    display: none;

    @media only screen and (min-width: 768px) {
        display: block;
        max-width: 512px;
    }
`;

export const StyledDesc = styled.div`
    text-align: center;
    margin: 31px 0 clamp(21px, 3.854vw, 74px);
    max-width: 400px;
    font-size: clamp(16px, 1.25vw, 24px );
    line-height: 1.5em;

    @media only screen and (min-width: 768px) {
        text-align: left;
        max-width: 700px;
    }
`;