// @ts-nocheck
import * as React from "react"
import { Seo } from "../components/atoms/seo/seo";
import Input from "../components/atoms/Input/Input";
import Button from "../components/atoms/Button/Button";
import Link from "../components/atoms/Link/Link";
import HamburgerButton from "../components/atoms/HamburgerButton/HamburgerButton";
import FAQElement from "../components/atoms/FAQElement/FAQElement";
import { graphql } from "gatsby";
import HeroSection from "../components/arganisms/HeroSection/HeroSection";

const IndexPage = ({ data }) => {

  const { datoCmsHomePage: {
    mainSectionPageDescription,
    mainSectionPageTitle,
    mainSectionHeroImage,
  } } = data;

  const [error, setError] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

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
          url
          gatsbyImageData
        }
        mainSectionPageDescription
        mainSectionPageTitle
    }
  }
`;
