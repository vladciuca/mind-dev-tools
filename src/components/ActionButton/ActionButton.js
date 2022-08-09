import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ButtonContainer } from "./ActionButton.styles";

export const ActionButton = () => {
  return (
    <ButtonContainer>
      Browse Tools
      <span>
        <MdKeyboardArrowRight />
      </span>
    </ButtonContainer>
  );
};
