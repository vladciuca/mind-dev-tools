import styled from "styled-components";

export const ButtonContainer = styled.div`
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-image: linear-gradient(
    to left top,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary}
  );
  font-size: 1.2rem;
  &:hover {
    background-image: linear-gradient(
      to left top,
      ${({ theme }) => theme.secondary},
      ${({ theme }) => theme.primary}
    );
  }
`;
