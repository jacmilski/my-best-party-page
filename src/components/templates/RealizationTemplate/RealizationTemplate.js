// @ts-nocheck
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import {
  StyledImageWrapper,
  StyledRealizationTemplate,
  StyledTextWrapper,
  StyledContentWrapper,
} from "./RealizationTemplate.styles";
import { StyledSecondTitle } from "../../../styles/sharedStyles";
import Button from "../../atoms/Button/Button";

const RealizationTemplate = ({ data: { datoCmsRealization } }) => {
  return (
    <StyledRealizationTemplate>
      <StyledTextWrapper>
        <StyledSecondTitle>{datoCmsRealization.title}</StyledSecondTitle>
        <StyledContentWrapper>
          {datoCmsRealization.realizationPageDesc}
        </StyledContentWrapper>
        <Button text="KONTAKT" type="button" href="/kontakt/" />
      </StyledTextWrapper>
      <StyledImageWrapper>
        <GatsbyImage
          image={getImage(
            datoCmsRealization.realizationSiteBigPhoto.gatsbyImageData
          )}
          alt={datoCmsRealization.realizationSiteBigPhoto.alt}
        />
      </StyledImageWrapper>
    </StyledRealizationTemplate>
  );
};

export default RealizationTemplate;

export const query = graphql`
  query RealizationPageQuery($realizationId: String) {
    datoCmsRealization(id: { eq: $realizationId }) {
      id
      title
      realizationPageDesc
      slug
      realizationSiteBigPhoto {
        alt
        gatsbyImageData
      }
    }
  }
`;
