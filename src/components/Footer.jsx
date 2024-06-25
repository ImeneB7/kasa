import React from "react";
import LogoFooter from '../assets/images/LogoFooter.png'
import '../sass/_footer.scss';

const Footer = () => {
    return (
        <footer>
            <img src={LogoFooter} alt="Logo Kasa" className="Logo-Footer"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;