// @ts-nocheck
import React from "react";
import { StyledElements, StyledFAQSection } from "./FAQSection.styles";
import { graphql, useStaticQuery } from "gatsby";
import { StyledSecondTitle } from "../../../styles/sharedStyles";
import FAQElement from "../../atoms/FAQElement/FAQElement";

function FAQSection({ isContactPage }) {
  const {
    datoCmsFaqSection: { title, questionsAndAnswers },
  } = useStaticQuery(graphql`
    query FaqQuery {
      datoCmsFaqSection {
        title
        questionsAndAnswers {
          id
          question
          answer
        }
      }
    }
  `);

  return (
    <StyledFAQSection $isContactPage={isContactPage}>
      <StyledSecondTitle style={{ color: "var(--white)" }}>
        {title}
      </StyledSecondTitle>
      <StyledElements>
        {questionsAndAnswers.map(({ question, answer, id }) => (
          <FAQElement question={question} answer={answer} key={id} />
        ))}
      </StyledElements>
    </StyledFAQSection>
  );
}

export default FAQSection;
