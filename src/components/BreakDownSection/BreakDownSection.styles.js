import styled from "styled-components";
import { InfoGraphItem } from "../UI/UI.styles";

export const BreakDownInfoGraphItem = styled(InfoGraphItem)`
  span {
    margin-left: 2rem;
  }
`;

export const SelectedSquare = styled.span`
  color: ${({ theme }) => theme.accent};
  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;
