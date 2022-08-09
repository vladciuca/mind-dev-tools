import React from "react";
import { SectionContainer, SectionDivider } from "../UI/UI.styles";
import { BreakDownSection } from "../BreakDownSection/BreakDownSection";
import { SuccessSection } from "../SuccessSection/SuccessSection";
import { LetGoSection } from "../LetGoSection/LetGoSection";

export const HowToUseSection = () => (
  <SectionContainer id="how-to-use">
    <BreakDownSection />
    <SectionDivider />
    <SuccessSection />
    <SectionDivider />
    <LetGoSection />
  </SectionContainer>
);
