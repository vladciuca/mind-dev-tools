import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  MobileNavMenuContainer,
  CloseIcon,
  MobileNavMenuWrapper,
  MobileNavMenuLink,
  NavButton,
} from "./MobileNavMenu.styles";

export const MobileNavMenu = ({ isOpen, toggle }) => {
  return (
    <MobileNavMenuContainer isOpen={isOpen}>
      <CloseIcon onClick={toggle}>
        <AiOutlineCloseCircle />
      </CloseIcon>
      <MobileNavMenuWrapper>
        <MobileNavMenuLink
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          to="how-to-use"
          onClick={toggle}
        >
          Guide Lines
        </MobileNavMenuLink>
        <MobileNavMenuLink
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          to="cheat-sheet"
          onClick={toggle}
        >
          Cheat Sheet
        </MobileNavMenuLink>
        <NavButton onClick={toggle}>TOOLS</NavButton>
      </MobileNavMenuWrapper>
    </MobileNavMenuContainer>
  );
};
