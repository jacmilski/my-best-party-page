// @ts-nocheck
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
    StyledImageWrapper,
    StyledRealizationCard,
    StyledTitle,
    StyledTitleWrapper
} from './RealizationCard.styles';

const RealizationCard = ({ image, title }) => {
  return (
    <StyledRealizationCard>
        <StyledImageWrapper>
            <GatsbyImage image={getImage(image.gatsbyImageData)} alt={image.alt} />
        </StyledImageWrapper>
        <StyledTitleWrapper>
            <StyledTitle>
                { title }
            </StyledTitle>
        </StyledTitleWrapper>
    </StyledRealizationCard>
  )
}

export default RealizationCard;