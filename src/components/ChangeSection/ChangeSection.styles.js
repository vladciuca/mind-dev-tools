import styled from "styled-components";

export const ActionOrder = styled.span`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ActionNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    position: relative;
    padding: 1rem;
    span {
        position absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
  }
`;

export const ActionsCircle = styled.div`
  height: 9.5rem;
  width: 9.5rem;
  border: 1px solid ${({ theme }) => theme.textLight};
  border-radius: 999px;
  position: relative;
  background: ${({ theme }) => theme.negative};
`;

export const StoriesCircle = styled.div`
  height: 6rem;
  width: 6rem;
  border: 1px solid ${({ theme }) => theme.textLight};
  border-radius: 999px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.neutral};
`;

export const IdentityCircle = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border: 1px solid ${({ theme }) => theme.textLight};
  border-radius: 999px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.positive};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoGraphLegend = styled.div`
  display: flex;
  align-items: center;
  span {
    padding: 0 0.2rem;
  }
`;

export const InfoGraphLegendContainer = styled.div`
  @media (max-width: 768px) {
    padding-left: 0.5rem;
  }
  @media (min-width: 768px) {
    padding-left: 3rem;
  }
`;
