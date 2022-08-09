import styled from "styled-components";
import { InfoGraph, TextLight } from "../UI/UI.styles";

export const InfoGraphContainer = styled(InfoGraph)`
  flex-flow: row wrap;
  justify-content: center;
  display: grid;
  grid-template-columns: 50%;
  @media (max-width: 768px) {
    grid-template-columns: 75%;
  }
`;

export const InfoGraphSubText = styled(TextLight)`
  text-align: center;
  padding: 2rem 0;
`;

export const InfoGraphSplit = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding-top: 3rem;
`;
