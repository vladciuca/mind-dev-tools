import styled from "styled-components";
import { InfoGraphItem } from "../UI/UI.styles";

export const BreakDownInfoGraphItem = styled(InfoGraphItem)`
  padding: 0 17.5px;
`;

export const BreakDownArrow = styled(InfoGraphItem)`
  padding: 0 2rem;
`;

export const SelectedSquare = styled.span`
  color: ${({ theme }) => theme.negative};
  &:hover {
    transition: 0.3s ease-in-out;
    color: ${({ theme }) => theme.positive};
  }
`;
