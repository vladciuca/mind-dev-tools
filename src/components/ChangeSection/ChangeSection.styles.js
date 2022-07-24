import styled from "styled-components";

export const ActionOrder = styled.span`
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
  height: 12rem;
  width: 12rem;
  border-radius: 999px;
  position: relative;
  background: ${({ theme }) => theme.accent};
`;

export const StoriesCircle = styled.div`
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 999px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.primary};
`;

export const IdentityCircle = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 999px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;
