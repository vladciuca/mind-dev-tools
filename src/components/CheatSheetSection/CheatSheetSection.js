import React from "react";
import { SectionContainer, SectionDivider } from "../UI/UI.styles";
import { EntourageSection } from "../EntourageSection/EntourageSection";
import { OneThingSection } from "../OneThingSection/OneThingSection";
import { ChangeSection } from "../ChangeSection/ChangeSection";

export const CheatSheetSection = () => (
  <SectionContainer id="cheat-sheet">
    <EntourageSection />
    <SectionDivider />
    <OneThingSection />
    <SectionDivider />
    <ChangeSection />
  </SectionContainer>
);
