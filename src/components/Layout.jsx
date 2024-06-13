import React from "react";
import NavBar from "./NavBar";
import Logo from '../assets/images/LOGO.png';
import '../sass/_layout.scss';

const Layout = ({ Children }) => {
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

            </footer>
        )
    }

    return (
        <div>
            <Header/>
            <main>
                {Children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;