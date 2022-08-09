import styled from "styled-components";
import { InfoGraph, TextLight } from "../UI/UI.styles";

export const InfoGraphContainer = styled(InfoGraph)`
  flex-flow: row wrap;
  justify-content: center;
`;

export const InfoGraphSubText = styled(TextLight)`
  text-align: center;
  padding: 2rem 6rem;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const InfoGraphSplit = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding-top: 3rem;
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`;
