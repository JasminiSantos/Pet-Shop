import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.div`
  background: ${({ scrollNav }) => (scrollNav? '#000': 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 3;

  @media screen and (max-width: 760px) {

    transition: 0.8s all ease;

  }

`;

export const NavbarContainer = styled.div`

  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

export const Navlogo = styled(Link)`

  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 4rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  text-decoration: none;


  &:hover {
      transition: 0.2s all ease-in-out;
      color: #000;
  }
`;

export const NavMenu = styled.ul`

  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;


  @media screen and (max-width: 760px) {

    display: none;
  }
`;

export const NavItem = styled.div`
    height: 80px;
`;

export const NavLinks = styled(Link)`

  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
      border-bottom: 3px solid #000;
  }
`;

export const NavBtn = styled.nav`

  display: flex;
  align-items: center;
`;

export const NavBtnLink = styled(Link)`

  border-radius: 20px;
  background: #fff;
  white-space: nowrap;
  padding: 10px 22px;
  color: #000;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
      transition: 0.2s all ease-in-out;
      background: #000;
      color: #fff;
  }
`;

export const NavBtnLinkSignUp = styled(Link)`

  border-radius: 5px;
  margin-right: 20px;
  background: #002;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
      transition: 0.2s all ease-in-out;
      background: #fff;
      color: #002;
  }
`;
