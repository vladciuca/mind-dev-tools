import styled from "styled-components";

export const Glass = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  box-shadow: 0 4px 30px ${({ theme }) => theme.shadow};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid ${({ theme }) => theme.cardBorder};
`;

//App components

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

//TEXT components

export const Paragraph = styled.div`
  text-align: justify;
  text-justify: inter-word;
  padding: 1rem 3rem;
`;

export const Text = styled.span`
  font-size: 1.2rem;
  line-height: 2.2rem;
  color: ${({ theme }) => theme.text};
`;

export const TextLight = styled.span`
  font-size: 1.1rem;
  line-height: 2.1rem;
  color: ${({ theme }) => theme.textLight};
`;

export const Source = styled.span`
  text-decoration: underline;
`;

export const TextHighlight = styled.span`
  background-color: ${({ theme }) => theme.textHighlight};
`;

export const PrimaryHighlight = styled.span`
  background-color: ${({ theme }) => theme.primary};
`;

export const SecondaryHighlight = styled.span`
  background-color: ${({ theme }) => theme.secondary};
`;

export const AccentHighlight = styled.span`
  background-color: ${({ theme }) => theme.accent};
`;

//SECTION components

export const SectionTitle = styled.div`
  font-size: 1.7rem;
  padding: 2rem 3rem;
`;

export const InfoGraph = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  margin: auto;
  width: 50%;
`;

export const InfoGraphItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoGraphIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
`;
