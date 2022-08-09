import styled from "styled-components";

export const ButtonContainer = styled.div`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.negative};
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  span {
    font-size: 1.6rem;
    padding-left: 0.25rem;
    display: flex;
    align-items: center;
  }
`;
