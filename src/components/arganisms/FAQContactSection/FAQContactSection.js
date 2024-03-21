// @ts-nocheck
import React from 'react';
import Contact from '../Contact/Contact';
import FAQSection from '../FAQSection/FAQSection';
import { StyledFAQContactSection, StyledCircleWrapper } from './FAQContactSection.styles';
import DoubleCircle from '../../atoms/Icons/DoubleCircle';

const FAQContactSection = ({ isContactPage }) => (
    <StyledFAQContactSection $isContactPage={!isContactPage}>
      <StyledCircleWrapper>
        <DoubleCircle />
      </StyledCircleWrapper>
      <Contact isContactPage={isContactPage} />
      <FAQSection isContactPage={isContactPage} />
    </StyledFAQContactSection>
  )

export default FAQContactSection;