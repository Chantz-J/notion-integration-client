import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useMenuContext } from "../../state/MenuState";
import { Squash as Hamburger } from "hamburger-react";
import NavLinks from "./NavLinks";
import { useScroll } from "../../hooks";

const DesktopNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  border-bottom: ${props => props.theme.bg.secondary};
  // color: black;
  transition: all 150ms linear;
  ${(props) =>
    props.isScrolled &&
    css`
      background: white;
      box-shadow: white;
    `}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 0 60px;
  z-index: 2;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 30px;
  }
  .logo {
    flex: 2;
    color: ${props => props.theme.text.primary};
    font-size: 32px;
    text-decoration: none;
  }
  .nav-links {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .hamburger-react {
    display: none;
    z-index: 99;
    color: ${props => props.theme.text.primary};
    & > div > div {
      background: ${props => props.theme.text.primary} !important;
    }
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;


export default function DesktopNavbar({ themeToggle }){
    const { isMenuOpen, toggleMenu } = useMenuContext();
    const { isScrolled } = useScroll();

    return (
        <DesktopNav isScrolled={isScrolled}>
            <Link to="/" className="logo">
                {/* <img src={RechargeLogo} alt='Recharge Payment Logo' width='100'/> */}
                Logo
            </Link>
            <NavLinks themeToggle={themeToggle}/>
            <Hamburger toggled={isMenuOpen} toggle={toggleMenu} duration={0} />
        </DesktopNav>
    )
}