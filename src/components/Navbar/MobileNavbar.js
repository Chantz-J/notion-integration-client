import React, { useState} from "react";
import { StyledNavbar } from "./styles";

export default function MobileNavbar(){
    const [menuState, setMenuState] = useState(false);
    return (
        <StyledNavbar>
            <div className="mobile-nav">
                <div className="logo">
                    <a href="#">Logo</a>
                </div>
                <div className={`collapse ${!menuState ? '' : ''}`}>
                    <ul className="menu">
                    <li className="link"><a href="#">Home</a></li>
                    <li className="link"><a href="#">About</a></li>
                    <li className="link"><a href="#">Contact</a></li>
                    <li className="link"><a href="#">Blog</a></li>
                    <li className="link"><a href="#">Careers</a></li>
                    </ul>
                    <a href="#"><div className="nav-btn">Request Invite</div></a>
                </div>
                {/* <img src={iconHamburger} className='hamburger' style={{ visibility: menuState ? 'hidden' : '' }} onClick={() => setMenuState(!menuState)} />
                <img src={iconClose} className={`fa-times ${!menuState ? 'hidden' : ''}`} onClick={() => setMenuState(!menuState)} /> */}
            </div >
        </StyledNavbar>
    )
}