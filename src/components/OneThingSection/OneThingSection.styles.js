import styled from "styled-components";
import { InfoGraph, TextLight } from "../UI/UI.styles";

export const InfoGraphContainer = styled(InfoGraph)`
  flex-flow: row wrap;
  justify-content: flex-center;
`;

export const InfoGraphSubText = styled(TextLight)`
  padding: 2rem;
  text-align: center;
`;

export const InfoGraphSplit = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding-top: 2rem;
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`;
