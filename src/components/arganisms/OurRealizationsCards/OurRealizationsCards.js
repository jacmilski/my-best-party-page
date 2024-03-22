// @ts-nocheck
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  StyledCardLink,
  StyledContent,
  StyledFootnote,
  StyledImage,
  StyledOurRealizationsCards,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from "./OurRealizationsCards.styles";
import { StyledSecondTitle } from "../../../styles/sharedStyles";
import { labels } from "./OurRealizationsCards.data";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function OurRealizationsCards() {
  const {
    allDatoCmsRealization: { edges },
  } = useStaticQuery(graphql`
    query OurRealizationsQuery {
      allDatoCmsRealization {
        edges {
          node {
            id
            catering
            numberOfPeople
            thumbnailDesc
            slug
            title
            thumbnail {
              alt
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  return (
    <StyledOurRealizationsCards>
      <StyledSecondTitle>{labels.title}</StyledSecondTitle>
      <StyledWrapper>
        {edges.map(({ node }) => (
          <StyledCardLink to={`/realizacja/${node.slug}`} key={node.id}>
            <StyledImage>
              <GatsbyImage
                image={getImage(node.thumbnail.gatsbyImageData)}
                alt={node.thumbnail.alt}
              />
            </StyledImage>
            <StyledContent>
              <StyledTitle>{node.title}</StyledTitle>
              <StyledText>{node.thumbnailDesc}</StyledText>
              <StyledFootnote>
                <p>
                  {labels.catering}:{" "}
                  <span style={{ color: "var(--green)" }}>
                    {node.catering ? labels.yes : labels.no}
                  </span>
                </p>
                <p>
                  {labels.count}:{" "}
                  <span style={{ color: "var(--green)" }}>
                    {node.numberOfPeople}
                  </span>
                </p>
              </StyledFootnote>
            </StyledContent>
          </StyledCardLink>
        ))}
      </StyledWrapper>
    </StyledOurRealizationsCards>
  );
}

export default OurRealizationsCards;
