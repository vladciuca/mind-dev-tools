import React from "react";
import { FaListUl } from "react-icons/fa";
import { Container } from "../UI/UI.styles";
import { Header } from "./SectionHeader.styles";

export const SectionHeader = ({ title }) => (
  <Container>
    <Header>
      <div></div>
      <h2>{title}</h2>
    </Header>
  </Container>
);
