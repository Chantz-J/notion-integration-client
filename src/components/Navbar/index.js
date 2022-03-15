import React from 'react';
import { Link } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';
import { StyledNavbar } from './styles';
import Button from '../Button';


export default function Navbar({ themeToggle, colorScheme }){
    const notionLink = 'https://blush-quail-c06.notion.site/994c24e36390405dbb3a69c044596817?v=a0786629e0614375a9755bfd1cc28c8c'
    return (
        <StyledNavbar themeToggle={themeToggle}>
            <div className="navbg">
                <div className="nav-container">
                    <nav className="navbar">
                        <ul className="menu">
                            <li className="link"><Link to={"/"}>Home</Link></li>
                            <li className="link"><Link to={"/create-page"}>Create</Link></li>
                            <li className="link">
                                <a 
                                    href={notionLink}
                                    target="_blank" 
                                    rel="noreferrer"
                                >                                
                                    Notion
                                </a>
                                </li>
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