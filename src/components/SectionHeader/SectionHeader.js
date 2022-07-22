import React from "react";
import { Container } from "../UI/UI.styles";
import { Header } from "./SectionHeader.styles";

export const SectionHeader = ({ title }) => (
  <Container>
    <Header>
      <div></div>
      <h2>
        {">"} mind-dev-tools/{title}:
      </h2>
    </Header>
  </Container>
);
