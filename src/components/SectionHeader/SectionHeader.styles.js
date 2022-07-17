import styled from "styled-components";
import { Glass } from "../UI/UI.styles";

export const Header = styled(Glass)`
  width: 100%;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: columns;
  overflow: hidden;
  margin-top: 5rem;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    background: ${({ theme }) => theme.text};
    padding: 0 0.6rem;
    margin-right: 1rem;
    width: 5px;
    min-width: 5px;
  }
`;
