import React from 'react';
import { Link } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';
import { StyledNavbar } from './styles';
import Button from '../Button';


export default function Navbar({ themeToggle, colorScheme }){
    return (
        <StyledNavbar themeToggle={themeToggle}>
            <div className="navbg">
                <div className="nav-container">
                    <nav className="navbar">
                    <div className="logo">
                        <Link to={"/"}>LOGO</Link>
                    </div>
                    <ul className="menu">
                        <li className="link"><Link to={"/"}>Home</Link></li>
                        <li className="link"><Link to={"/"}>About</Link></li>
                        <li className="link"><Link to={"/"}>Contact</Link></li>
                        <li className="link"><Link to={"/"}>Blog</Link></li>
                    </ul>
                    <Button 
                        text={colorScheme === 'light' ? '🌚' : '🌞'} 
                        onClick={themeToggle} 
                    />
                    </nav>
                </div>
            <MobileNavbar />
            </div>
        </StyledNavbar>
    )
}