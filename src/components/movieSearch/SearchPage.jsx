//SKA EGENTLIGEN IN I PAGES/VIEWS-MAPPEN
import React from "react";
import HandleSearch from "./HandleSearch";
import MovieSearchCard from "./MovieSearchCard";
import "./searchPage.css";
import Header from "../header/Header";

const SearchPage = () => {

    return (
        <div className="searchPage">
            <Header />
            <MovieSearchCard />
        </div>
    )

}

export default SearchPage;