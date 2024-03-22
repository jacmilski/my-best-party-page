// @ts-nocheck
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  StyledCircleWrapper,
  StyledImageWrapper,
  StyledList,
  StyledListSection,
  StyledTextWrapper,
} from "./ListSection.styles";
import { StyledSecondTitle } from "../../../styles/sharedStyles";
import Circle from "../../atoms/Icons/Circle";

const ListSection = ({ image, title, list }) => {
  return (
    <StyledListSection>
      <StyledCircleWrapper>
        <Circle />
      </StyledCircleWrapper>
      <StyledImageWrapper>
        <GatsbyImage
          image={getImage(image.gatsbyImageData)}
          alt={image.alt}
          title={image.title}
        />
      </StyledImageWrapper>
      <StyledTextWrapper>
        <StyledSecondTitle>{title}</StyledSecondTitle>
        <StyledList>
          {list.map(({ element, id }) => (
            <li key={id}>{element}</li>
          ))}
        </StyledList>
      </StyledTextWrapper>
    </StyledListSection>
  );
};

export default ListSection;
