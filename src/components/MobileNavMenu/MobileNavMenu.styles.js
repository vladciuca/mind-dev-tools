import styled from "styled-components";
import { Link } from "react-scroll";

export const MobileNavMenuContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.cardPrimary};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: grid;
  align-items: center;
  let: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
`;

export const MobileNavMenuWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
  text-align: center;
  padding-left: 0;
  padding-top: 40%;
  grid-gap: 30px;
  margin: 0 150px;

  @media screen and (max-width: 480px) {
    margin: 0 50px;
  }
`;

export const MobileNavMenuLink = styled(Link)`
  border: 1.5px solid ${({ theme }) => theme.text};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.bgPrimary};
    background: ${({ theme }) => theme.text};
    transition: 0.2s ease-in-out;
  }
`;

export const NavButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  background: ${({ theme }) => theme.negative};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
`;
