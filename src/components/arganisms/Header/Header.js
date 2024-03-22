// @ts-nocheck
import React, { useState } from "react";
import { StyledHeader, StyledLogo } from "./Header.styles";
import Nav from "../Nav/Nav";
import HamburgerButton from "../../atoms/HamburgerButton/HamburgerButton";
import Logo from "../../atoms/Icons/Logo";
import { useLocation } from "@gatsbyjs/reach-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const isOurRealizationPage = location.pathname === "/nasze-realizacje/";

  return (
    <StyledHeader>
      <StyledLogo to="/">
        <Logo
          isBlack={
            isOurRealizationPage ||
            location.pathname === "/kontakt/" ||
            location.pathname.includes("/realizacja/")
          }
        />
      </StyledLogo>
      <Nav
        isBlack={isOurRealizationPage}
        isOpen={isOpen}
        setIstOpen={setIsOpen}
      />
      <HamburgerButton
        isBlack={
          isOurRealizationPage ||
          location.pathname === "/kontakt/" ||
          location.pathname.includes("/realizacja/")
        }
        isOpen={isOpen}
        openMenu={() => setIsOpen((prev) => !prev)}
      />
    </StyledHeader>
  );
};

export default Header;

/* TU JEST */
