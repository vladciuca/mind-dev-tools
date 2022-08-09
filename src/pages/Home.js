import React from "react";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { HowToUseSection } from "../components/HowToUseSection/HowToUseSection";
import { CheatSheetSection } from "../components/CheatSheetSection/CheatSheetSection";
import { PageContainer } from "../components/UI/UI.styles";

export const Home = () => {
  return (
    <PageContainer>
      <HeroSection />
      <HowToUseSection />
      <CheatSheetSection />
    </PageContainer>
  );
};
