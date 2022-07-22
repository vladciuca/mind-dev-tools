import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Input, InputContainer, RangeSymbol } from "./LetGoSlider.styles";

export const LetGoSlider = ({ range, handleChange }) => (
  <InputContainer>
    <RangeSymbol>
      <AiOutlineMinus />
    </RangeSymbol>
    <Input
      type="range"
      min={4}
      max={10}
      value={range}
      onChange={handleChange}
    />
    <RangeSymbol>
      <AiOutlinePlus />
    </RangeSymbol>
  </InputContainer>
);
