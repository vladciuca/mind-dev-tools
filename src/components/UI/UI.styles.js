import styled from "styled-components";

export const Glass = styled.div`
  background: ${({ theme }) => theme.card};
  box-shadow: 0 4px 30px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

//App components

export const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1100px;
`;

export const SectionContainer = styled.div`
  background: ${({ theme }) => theme.bgPrimary};
  border-radius: 20px;
  width: 100%;
  padding: 50px 0;
  margin-bottom: 100px;
`;

export const SectionDivider = styled.div`
  width: 90%;
  height: 1px;
  background: ${({ theme }) => theme.negative};
  margin: 3rem auto;
  border-radius: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0.5rem;
`;

export const Spacer = styled.div`
  height: 200px;
`;

//TEXT components

export const Paragraph = styled.div`
  text-align: justify;
  text-justify: inter-word;
  @media (max-width: 600px) {
    padding: 1rem 1rem;
  }
  @media (min-width: 600px) {
    padding: 1rem 3rem;
  }
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

export const NeutralHighlight = styled.span`
  background-color: ${({ theme }) => theme.neutral};
`;

export const PositiveHighlight = styled.span`
  background-color: ${({ theme }) => theme.positive};
`;

export const NegativeHighlight = styled.span`
  background-color: ${({ theme }) => theme.negative};
`;

export const NeutralColor = styled.span`
  color: ${({ theme }) => theme.neutral};
`;

export const PositiveColor = styled.span`
  color: ${({ theme }) => theme.positive};
`;
export const NegativeColor = styled.span`
  color: ${({ theme }) => theme.negative};
`;

//SECTION components

export const SectionTitle = styled.div`
  font-size: 1.7rem;
  line-height: 2.3rem;
  @media (max-width: 600px) {
    padding: 3rem 1.5rem 1rem 1.5rem;
  }
  @media (min-width: 600px) {
    padding: 3rem 3rem 1rem 3rem;
  }
`;

export const InfoGraph = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 0.5rem;
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
  color: ${({ theme }) => theme.neutral};
`;

export const InfoGraphText = styled.div`
  text-align: center;
  @media (max-width: 768px) {
    padding: 1rem;
  }
  @media (min-width: 768px) {
    padding: 1rem 0;
  }
`;
