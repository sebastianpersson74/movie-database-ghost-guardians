import React from "react";
import "./header.css";
import HandleSearch from "../movieSearch/HandleSearch";
import Logo from "../../assets/logo.png";
import Favourites from "../../assets/star.svg";
import { Link } from "react-router-dom";
import MobileLogo from "../../assets/Logo-small.svg"

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} className="logo desktop-logo" alt="Logga" />
        <img src={MobileLogo} className="logo mobile-logo" alt="Filmrulle" />
      </Link>
      <HandleSearch />
      <Link to="/favorites">
        <img src={Favourites} className="favouriteBtn" alt="star" />
      </Link>
    </div>
  );
};

export default Header;

