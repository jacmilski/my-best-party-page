// @ts-nocheck
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  StyledDesc,
  StyledImageWrapper,
  StyledMyPartySection,
  StyledTextWrapper
} from './MyBestPartySection.styles';
import Button from '../../atoms/Button/Button';
import { StyledSecondTitle } from '../../../styles/sharedStyles';

const MyBestPartySection = ({ image, title, desc }) => {

  console.log(image.alt);

  return (
    <StyledMyPartySection>
        <StyledTextWrapper>
          <StyledSecondTitle>
            {title}
          </StyledSecondTitle>
          <StyledDesc>
            {desc}
          </StyledDesc>
          <Button type='button' text='KONTAKT' href='/kontakt' />
        </StyledTextWrapper>
        <StyledImageWrapper>
          <GatsbyImage
            image={getImage(image.gatsbyImageData)}
            alt={image.alt}
          />
        </StyledImageWrapper>
    </StyledMyPartySection>
  )
}

export default MyBestPartySection;