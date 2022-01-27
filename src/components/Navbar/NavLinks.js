import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMenuContext } from "../../state/MenuState";
// import Icon from "../Icon";

export const links = ["home", "about", "contact"];

const NavLinksWrapper = styled.ul`
  flex: 1;
  display: flex;
  // justify-content: center;
  align-items: center;
  list-style: none;
  li:not(:last-child) {
    margin-right: 26px;
  }
//   li:last-child {
//     margin-left: auto;
//   }
  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    li {
      padding: 12px;
      margin: 0 !important;
    }
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  // color: white;
  text-decoration: none;
  text-transform: capitalize;
  color: ${ props => props.theme.text.primary};
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background: ${props => props.theme.bg.secondary};
    transition: width 150ms linear;
  }
  &:hover::before {
    width: 100%;
  }
`;

export default function NavLinks({ themeToggle }){
  const { closeMenu } = useMenuContext();
  return (
    <NavLinksWrapper className="nav-links">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink to={`/${link}`} className="link" onClick={closeMenu}>
            {link}
          </NavLink>
        </li>
      ))}
      {/* <li>
        <button onClick={themeToggle}>
          Toggle Theme
        </button>
      </li> */}
    </NavLinksWrapper>
  );
};
