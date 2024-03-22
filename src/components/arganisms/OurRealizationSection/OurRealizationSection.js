// @ts-nocheck
import React from "react";
import Slider from "react-slick";
import {
  StyledOurRealizationSection,
  StyledSliderWrapper,
} from "./OurRealizationSection.styles";
import { StyledSecondTitle } from "../../../styles/sharedStyles";
import { useStaticQuery, graphql, Link } from "gatsby";
import { OurRealizationSectionLabels } from "./OurRealizationSection.data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RealizationCard from "../../atoms/RealizationCard/RealizationCard";

const OurRealizationSection = () => {
  const data = useStaticQuery(graphql`
    query RealizationSection {
      allDatoCmsRealization {
        edges {
          node {
            thumbnail {
              alt
              gatsbyImageData
            }
            title
            slug
          }
        }
      }
    }
  `);

  const {
    allDatoCmsRealization: { edges },
  } = data;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledOurRealizationSection>
      <StyledSecondTitle $desktopTextAlign="center">
        {OurRealizationSectionLabels.heading}
      </StyledSecondTitle>
      <StyledSliderWrapper>
        <Slider {...settings}>
          {edges.map(({ node }) => (
            <Link to={`/realizacja/${node.slug}`} key={node.slug}>
              <RealizationCard title={node.title} image={node.thumbnail} />
            </Link>
          ))}
        </Slider>
      </StyledSliderWrapper>
    </StyledOurRealizationSection>
  );
};

export default OurRealizationSection;
