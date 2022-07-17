import styled from "styled-components";
import { Text } from "../UI/UI.styles";

export const FormulaTitle = styled(Text)`
  padding-top: 3rem;
`;

export const Formula = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 5rem;
`;

export const Brackets = styled.div`
  font-size: 4rem;
  font-weight: 100;
`;

export const Variable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
`;

export const Icon = styled.div`
  color: ${({ theme }) => theme.primary};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
