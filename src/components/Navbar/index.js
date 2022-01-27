import React from 'react';
import styled from 'styled-components';

import DesktopNavbar from './DesktopNav';
import MobileNavbar from './MobileNav';

const Nav = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export default function Navbar({ themeToggle }){
    return (
        <Nav>
            <DesktopNavbar themeToggle={themeToggle}/>
            <MobileNavbar themeToggle={themeToggle}/>
        </Nav>
    )
}