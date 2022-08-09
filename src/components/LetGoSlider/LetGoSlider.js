import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Input, InputContainer, RangeSymbol } from "./LetGoSlider.styles";

export const LetGoSlider = ({
  range,
  handleChange,
  handleIncrease,
  handleDecrease,
}) => (
  <InputContainer>
    <RangeSymbol onClick={handleDecrease}>
      <AiOutlineMinus />
    </RangeSymbol>
    <Input
      type="range"
      min={4}
      max={10}
      value={range}
      onChange={handleChange}
    />
    <RangeSymbol onClick={handleIncrease}>
      <AiOutlinePlus />
    </RangeSymbol>
  </InputContainer>
);
