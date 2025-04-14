import React from "react";
import "./header.css";
import HandleSearch from "../movieSearch/HandleSearch";
import Logo from "../../assets/logo.png";
import Favourites from "../../assets/star.svg"

const Header = () => {
    return(
        <div className="header">
            <img src={Logo} className="logo" alt="Logga" />
            <HandleSearch />
            <img src={Favourites} className="favouriteBtn" alt="star" />
        </div>
    )
}

export default Header;