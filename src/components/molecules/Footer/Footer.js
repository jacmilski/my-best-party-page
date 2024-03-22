import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  StyledBottomWrapper,
  StyledFooter,
  StyledHeading,
  StyledLinks,
} from "./Footer.styles";
import { labels } from "./Footer.data";
import Link from "../../atoms/Link/Link";

function Footer() {
  const {
    datoCmsFooter: { info },
  } = useStaticQuery(graphql`
    query FooterQuery {
      datoCmsFooter {
        info
      }
    }
  `);

  return (
    <StyledFooter>
      <StyledHeading>{labels.logo}</StyledHeading>
      <StyledLinks>
        <Link
          url="/kontakt"
          ariaLabel="Kontakt"
          onClick={null}
          className={null}
        >
          {labels.contact}
        </Link>
        <Link
          url="/nasze_realizacje"
          ariaLabel="Realizacje"
          onClick={null}
          className={null}
        >
          {labels.realizations}
        </Link>
      </StyledLinks>
      <StyledBottomWrapper>
        <p>
          {info}
          <span>{new Date().getFullYear()}</span>
        </p>
      </StyledBottomWrapper>
    </StyledFooter>
  );
}

export default Footer;
