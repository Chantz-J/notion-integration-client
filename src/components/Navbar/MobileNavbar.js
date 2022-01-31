import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { StyledNavbar } from "./styles";

export default function MobileNavbar(){
    const [menuState, /*setMenuState*/] = useState(false);
    return (
        <StyledNavbar>
            <div className="mobile-nav">
                <div className="logo">
                    <Link to={'/'}>Logo</Link>
                </div>
                <div className={`collapse ${!menuState ? '' : ''}`}>
                    <ul className="menu">
                    <li className="link"><Link to={'/'}>Home</Link></li>
                    <li className="link"><Link to={'/'}>About</Link></li>
                    <li className="link"><Link to={'/'}>Contact</Link></li>
                    <li className="link"><Link to={'/'}>Blog</Link></li>
                    <li className="link"><Link to={'/'}>Careers</Link></li>
                    </ul>
                    <Link to={'/'}><div className="nav-btn">Request Invite</div></Link>
                </div>
                {/* <img src={iconHamburger} className='hamburger' style={{ visibility: menuState ? 'hidden' : '' }} onClick={() => setMenuState(!menuState)} />
                <img src={iconClose} className={`fa-times ${!menuState ? 'hidden' : ''}`} onClick={() => setMenuState(!menuState)} /> */}
            </div >
        </StyledNavbar>
    )
}