import React from "react";
import '../sass/_banner.scss';


function Banner ({image, texte}) {
    return (
        <div className="banner">
            <div className="banner__overlay"></div>
            <img className="banner__img" src={image} alt="Bannière" />
            {texte && <h1 className="banner__text">{texte}</h1>}
        </div>
    )
}

export default Banner;
