import styled, { keyframes } from "styled-components";

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  padding: 2rem 0 0 0;
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

export const SubText = styled.div`
  color: ${({ theme }) => theme.textLight};
  font-size: 1rem;
  padding: 0.5rem 0 3rem 0;
`;

const FadeInOut = keyframes`
0%{opacity: 1}
100%{opacity: 0}`;

export const Indicator = styled.span`
  cursor: default;
  background: rgba(255, 255, 255, 0.2);
  animation: ${FadeInOut} 1s infinite alternate;
`;
