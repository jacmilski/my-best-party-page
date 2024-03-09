// @ts-nocheck
import * as React from "react"
import { Seo } from "../components/atoms/seo/seo";
import { graphql } from "gatsby";
import HeroSection from "../components/arganisms/HeroSection/HeroSection";
import MyBestPartySection from "../components/molecules/MyBestPartySection/MyBestPartySection";
import ListSection from "../components/molecules/ListSection/ListSection";

const IndexPage = ({ data }) => {

  const { datoCmsHomePage: {
    mainSectionPageDescription,
    mainSectionPageTitle,
    mainSectionHeroImage,
    secondSectionTitle,
    secondSectionDesc,
    secondSectionPhoto,
    thirdSectionTitle,
    thirdSectionPhoto,
    list
  } } = data;

  return (
    <main>
      <HeroSection
        title={ mainSectionPageTitle }
        desc={ mainSectionPageDescription }
        heroImage={mainSectionHeroImage}
      />
      <MyBestPartySection
        image={secondSectionPhoto}
        title={secondSectionTitle}
        desc={secondSectionDesc}
      />
      <ListSection 
        image={thirdSectionPhoto}
        title={thirdSectionTitle}
        list={list}
      />
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
      list {
        element
      }
    }
  }
`;
