import styled, { keyframes } from "styled-components";
import { BsCircleFill } from "react-icons/bs";
import { TiUser } from "react-icons/ti";
import { BsGearFill } from "react-icons/bs";

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  height: 95%;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 100%;
  }
`;

export const ActionColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  order: 1;
  padding-top: 4rem;

  @media screen and (max-width: 1200px) {
    padding-left: 4rem;
  }

  @media screen and (max-width: 768px) {
    order: 2;
    padding-left: 0;
    padding-top: 0;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.textLight};
  font-size: 2.2rem;
  letter-spacing: -0.05rem;
  line-height: 3rem;
  padding-bottom: 7rem;
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    line-height: 2.2rem;
    text-align: center;
    padding-bottom: 0;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
    padding-bottom: 0;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Action = styled.div`
  font-size: 3.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 900;
  padding-bottom: 0.5rem;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 2.5rem;
    padding-top: 4rem;
  }
  @media screen and (max-width: 450px) {
    text-align: center;
    font-size: 2.2rem;
    padding-top: 4rem;
  }
`;

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.textLight};
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  padding-bottom: 2rem;
  @media screen and (max-width: 768px) {
    text-align: center;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media screen and (max-width: 450px) {
    text-align: center;
    font-size: 1.2rem;
    line-height: 2rem;
    font-weight: 500;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const ActionButtonContainer = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const SvgColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;

  @media screen and (max-width: 1200px) {
    padding-right: 4rem;
  }

  @media screen and (max-width: 768px) {
    order: 1;
    padding-top: 12rem;
    padding-right: 0;
  }
  @media screen and (max-width: 450px) {
    order: 1;
    padding-top: 9rem;
    padding-right: 0;
  }
`;

export const SvgContainer = styled.div`
  position: relative;
`;

const ExpandOuter = keyframes`
0% {
  font-size: 1rem;
  opacity: 0;
}
100% {
  font-size: 16.5rem;
  opacity: 0.3;
}
`;

export const OuterAnimation = styled(BsCircleFill)`
  color: ${({ theme }) => theme.neutral};
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -47%);
  animation: ${ExpandOuter} 1.5s infinite alternate;
`;

export const Circle = styled(BsCircleFill)`
  color: ${({ theme }) => theme.neutral};
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -45%);
  font-size: 8rem;
  @media screen and (max-width: 450px) {
    font-size: 6rem;
  }
`;

export const User = styled(TiUser)`
  color: ${({ theme }) => theme.bgPrimary};
  font-size: 9rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 450px) {
    font-size: 7rem;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const UserGear = styled(BsGearFill)`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
    top: -27px;
  }
`;
