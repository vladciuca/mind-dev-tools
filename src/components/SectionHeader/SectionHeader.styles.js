import styled from "styled-components";

export const Header = styled.div`
  background: ${({ theme }) => theme.card};
  box-shadow: 0 4px 30px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.cardBorder};
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
