import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: rgba(89, 100, 224, 0.5);

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 999;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1460px;
  flex-direction: column;
  padding: 1rem 2.4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 1rem 6rem;
  }
`;

const LogoContainer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Menu = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0;
  justify-content: center;
  flex-direction: column;
  display: ${(props) => (props.open ? "block" : "none")};

  @media (min-width: 768px) {
    justify-content: flex-end;
    flex-direction: row;
    display: flex;
  }
`;

const MenuItem = styled.li`
  text-align: center;
  margin: 10px 0;

  @media (min-width: 768px) {
    margin: 0 15px;
    width: max-content;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &.active {
    border-bottom: 2px solid #fff;
  }

  &:hover {
    color: #ddd;
  }
`;

const Hamburger = styled.div`
  cursor: pointer;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 5px;
    transition: 0.3s;
  }
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export {
  NavbarContainer,
  LogoContainer,
  Menu,
  MenuItem,
  StyledLink,
  Hamburger,
  TopContainer,
  InnerContainer,
};
