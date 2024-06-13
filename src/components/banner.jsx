import React from "react";
import '../sass/_banner.scss';


function Banner ({image, texte}) {
    return (
        <div className="banner">
            <img className="banner__img" src="{image}" alt="Bannière" />
        </div>
    )
}

export default Banner;
