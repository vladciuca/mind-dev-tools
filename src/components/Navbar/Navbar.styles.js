import styled, { css } from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 80px;
  top: 0;
  z-index: 10;
  transition: 0.3s ease-in-out;
`;

export const NavbarContainer = styled.div`
  background: ${({ scrollNav }) =>
    scrollNav
      ? css`
          ${({ theme }) => theme.cardSecondary}
        `
      : css`
          none
        `};
  border-radius: 20px;
  max-width: 1100px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 99%;
  @media screen and (max-width: 1200px) {
    padding: 0 4rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const NavbarLogo = styled.div`
  padding-left: ${({ scrollNav }) => (scrollNav ? css`1rem` : css`0`)};
  @media screen and (max-width: 1200px) {
    padding-left: 0;
  }
  transition: 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

export const NavItem = styled.li`
  height: 70px;
  font-weight: 600;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 99%;
  cursor: pointer;

  &.active {
    border-bottom: 1px solid ${({ theme }) => theme.negative};
  }
`;

export const NavButtonContainer = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
`;

export const NavButton = styled.div`
  cursor: pointer;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.bgPrimary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: 0.2s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.negative};
    color: ${({ theme }) => theme.text};
  }
`;
