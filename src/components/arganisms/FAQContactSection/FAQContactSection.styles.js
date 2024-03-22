// @ts-nocheck
import styled from "styled-components";

export const StyledFAQContactSection = styled.section`
  width: 100%;
  margin-top: ${({ $isContactPage }) =>
    $isContactPage ? "clamp(54px, 10.278vw, 148px)" : "80px"};
  position: relative;
  display: flex;
  flex-direction: ${({ $isContactPage }) =>
    $isContactPage ? "column-reverse" : "column"};
  z-index: 1;

  @media only screen and (min-width: 954px) {
    flex-direction: row;
    margin-top: ${({ $isContactPage }) =>
      $isContactPage ? "clamp(54px, 10.278vw, 148px)" : 0};
  }
`;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  top: 28%;
  left: -5%;
  z-index: -1;
  display: none;

  @media only screen and (min-width: 954px) {
    display: block;
  }
`;
