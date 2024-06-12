import React from "react";
import { NavLink } from "react-router-dom";
import '../sass/navbar.scss'

const NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/'>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>A propos</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;