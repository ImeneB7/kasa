import React from "react";
import NavBar from "./NavBar";
import Logo from '../assets/images/LOGO.png';
import LogoFooter from '../assets/images/LogoFooter.png'
import '../sass/_layout.scss';

const Layout = ({ children }) => {
    const Header = () => {
        return (
            <header>
                <img src={Logo} alt="Logo Kasa" className="Logo-kasa"></img>
                <nav className="nav-space">
                    <NavBar></NavBar>
                </nav>
            </header>
        )
    };

    const Footer = () => {
        return (
            <footer>
                <img src={LogoFooter} alt="Logo Kasa" className="Logo-Footer"></img>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        )
    }

    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;