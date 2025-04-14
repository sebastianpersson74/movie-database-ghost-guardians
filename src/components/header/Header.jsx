import React from "react";
import "./header.css";
import HandleSearch from "../movieSearch/HandleSearch";
import Logo from "../../assets/logo.png";
import Favourites from "../../assets/star.svg";
import { Link } from "react-router-dom";

const Header = ({ showSearch }) => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} className="logo" alt="Logga" />
      </Link>
      {showSearch && <HandleSearch />}
      <Link to="/favorites">
        <img src={Favourites} className="favouriteBtn" alt="star" />
      </Link>
      {/* <a href="/favorites"> */}
      {/*   <img src={Favourites} className="favouriteBtn" alt="star" /> */}
      {/* </a> */}
    </div>
  );
};

export default Header;

