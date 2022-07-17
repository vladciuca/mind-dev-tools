import styled from "styled-components";

export const Glass = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const Spacer = styled.div`
  height: 250px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

export const Text = styled.div`
  font-size: 1.5rem;
  padding: 0.3rem 0;
`;

export const InfoText = styled.div`
  font-size: 1.2rem;
  line-height: 2.2rem;
  padding: 1.5rem 3rem;
  color: ${({ theme }) => theme.textLight};
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  padding: 2rem 0;
`;

export const SuccessHighlight = styled.span`
  background-color: ${({ theme }) => theme.success};
`;

export const PrimaryHighlight = styled.span`
  background-color: ${({ theme }) => theme.primary};
`;

export const AccentHighlight = styled.span`
  background-color: ${({ theme }) => theme.accent};
`;
