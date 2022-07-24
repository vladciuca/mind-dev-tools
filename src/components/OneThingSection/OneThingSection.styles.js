import styled from "styled-components";
import { InfoGraph } from "../UI/UI.styles";

export const InfoGraphContainer = styled(InfoGraph)`
  width: 80%;
`;

export const InfoGraphText = styled.div`
  padding: 2rem;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.2rem;
`;

export const InfoGraphSplit = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
