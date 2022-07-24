import styled from "styled-components";
import { Glass } from "../UI/UI.styles";

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Bar = styled(Glass)`
  width: 90%;
  height: 50px;
  position: fixed;
  bottom: 0;
  border-radius: 1rem 1rem 0 0;
  padding: 1rem;
`;
