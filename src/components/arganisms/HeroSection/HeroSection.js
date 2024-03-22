// @ts-nocheck
import React from "react";
import {
  StyledContentWrapper,
  StyledDesc,
  StyledHeroSection,
  StyledImageWrapper,
  StyledTitle,
} from "./HeroSection.styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const HeroSection = ({ title, desc, heroImage }) => {
  return (
    <StyledHeroSection>
      <StyledImageWrapper>
        <GatsbyImage
          image={getImage(heroImage.gatsbyImageData)}
          alt={heroImage.alt}
          title={heroImage.title}
        />
      </StyledImageWrapper>
      <StyledContentWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledDesc>{desc}</StyledDesc>
      </StyledContentWrapper>
    </StyledHeroSection>
  );
};

export default HeroSection;
