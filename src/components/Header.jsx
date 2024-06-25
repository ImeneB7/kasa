import React from "react";
import NavBar from "./NavBar";
import Logo from '../assets/images/LOGO.png';
import '../sass/_header.scss';


const Header = ({ children }) => {
        return (
            <header>
                <img src={Logo} alt="Logo Kasa" className="Logo-kasa"></img>
                <nav className="nav-space">
                    <NavBar></NavBar>
                </nav>
            </header>
        )
}

export default Header;
