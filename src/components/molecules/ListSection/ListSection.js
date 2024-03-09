// @ts-nocheck
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  StyledImageWrapper,
  StyledList,
  StyledListSection,
  StyledTextWrapper
} from './ListSection.styles';
import { StyledSecondTitle } from '../../../styles/sharedStyles';

const ListSection = ({ image, title, list }) => {
  return (
    <StyledListSection>
      <StyledImageWrapper>
        <GatsbyImage
          image={getImage(image.gatsbyImageData)}
          alt={image.alt}
          title={image.title}
        />
      </StyledImageWrapper>
      <StyledTextWrapper>
        <StyledSecondTitle>{title}</StyledSecondTitle>
      </StyledTextWrapper>
      <StyledList>
        {list.map(({ element, id }) => (
          <li key={id}>{element}</li>
        ))}
      </StyledList>
    </StyledListSection>
  )
}

export default ListSection;