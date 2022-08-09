import styled from "styled-components";
import { InfoGraph, InfoGraphIcon } from "../UI/UI.styles";

export const FormulaTitle = styled.div`
  margin-top: 1.5rem;
  text-align: center;
`;

export const Formula = styled(InfoGraph)`
  padding: 0rem;
  margin-bottom: 4rem;
`;

export const Brackets = styled.div`
  font-size: 3.5rem;
  font-weight: 100;
`;

export const Variable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(InfoGraphIcon)`
  color: ${({ theme }) => theme.neutral};
  display: flex;
  align-items: center;
  justify-content: center;
  .fall {
    svg {
      transform: rotate(40deg);
    }
  }
`;
