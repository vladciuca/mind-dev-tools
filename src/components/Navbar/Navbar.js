import React, { useState, useEffect } from "react";
import { IoIosList } from "react-icons/io";
import { animateScroll } from "react-scroll";
import { MobileNavMenu } from "../MobileNavMenu/MobileNavMenu";
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavButtonContainer,
  NavButton,
} from "./Navbar.styles";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleHero = () => {
    animateScroll.scrollToTop({
      duration: 500,
    });
  };

  return (
    <Nav>
      <NavbarContainer scrollNav={scrollNav}>
        <NavbarLogo scrollNav={scrollNav} onClick={toggleHero}>
          mind-dev@tools
        </NavbarLogo>

        <MobileIcon onClick={toggle}>
          <IoIosList />
        </MobileIcon>

        <NavMenu>
          <NavItem>
            <NavLink
              to="how-to-use"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Guide Lines
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="cheat-sheet"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Cheat Sheet
            </NavLink>
          </NavItem>
          <NavItem>
            <NavButtonContainer>
              <NavButton>TOOLS</NavButton>
            </NavButtonContainer>
          </NavItem>
        </NavMenu>
      </NavbarContainer>

      <MobileNavMenu isOpen={isOpen} toggle={toggle} />
    </Nav>
  );
};
