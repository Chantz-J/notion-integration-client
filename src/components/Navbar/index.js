import React from 'react';
import { Link } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';
import { StyledNavbar } from './styles';
import Button from '../Button';


export default function Navbar({ themeToggle, colorScheme }){
    const notionLink = 'https://chance-and-the-moon-river.notion.site/a174fe989ad748579c3baa3702542b53?v=d8a6c07a8ed6435caa2259acd1037627'
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