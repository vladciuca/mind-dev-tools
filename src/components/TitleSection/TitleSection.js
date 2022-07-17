import React from "react";
import { FiSettings } from "react-icons/fi";
import { Container } from "../UI/UI.styles";
import { Title, Icon, Indicator, SubText } from "./TitleSection.styles";

export const TitleSection = () => (
  <>
    <Container>
      <Title>
        <Icon>
          <FiSettings />
        </Icon>
        install mind-dev-tools
        <Indicator>_</Indicator>
      </Title>
      <SubText> Reality is conjured through Imagination!</SubText>
    </Container>
  </>
);
