// @ts-nocheck
import * as React from "react"
import { Seo } from "../components/atoms/seo/seo";
import { graphql } from "gatsby";
import HeroSection from "../components/arganisms/HeroSection/HeroSection";

const IndexPage = ({ data }) => {

  const { datoCmsHomePage: {
    mainSectionPageDescription,
    mainSectionPageTitle,
    mainSectionHeroImage,
  } } = data;

  const [error, setError] = React.useState(false);

  return (
    <main>
      <HeroSection
        title={ mainSectionPageTitle }
        desc={ mainSectionPageDescription }
        heroImage={ mainSectionHeroImage } />
    </main>
  )
}

export default IndexPage;

export const Head = () => {
  return (
    <Seo title="Strona główna" description="Strona główna" pathname="/" children={IndexPage} />
  )
}

export const query = graphql`
  query homePageQuery {
    datoCmsHomePage {
      mainSectionHeroImage {
        alt
        title
        gatsbyImageData
      }
      mainSectionPageTitle
      mainSectionPageDescription
      secondSectionTitle
      secondSectionDesc
      secondSectionPhoto {
        alt
        title
        gatsbyImageData
      }
      thirdSectionTitle
      thirdSectionPhoto {
        alt
        title
        gatsbyImageData
      }
      lista {
        element
      }
    }
  }
`;
