//SKA EGENTLIGEN IN I PAGES/VIEWS-MAPPEN
import React from "react";
import Header from "../header/Header";
import MovieSearchCard from "./MovieSearchCard";
import "./searchPage.css";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <Header />
      <MovieSearchCard />
    </div>
  );
};

export default SearchPage;

