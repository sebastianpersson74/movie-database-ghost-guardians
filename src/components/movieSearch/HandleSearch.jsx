import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchPage.css";

function HandleSearch() {
  const [searchInput, setSearchInput] = useState("");
  //const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=420db47c&s=${searchInput}`,
      );
      const data = await response.json();
      navigate("/search", { state: { data: data.Search } });
      //console.log(data.Search);
    } catch (error) {
      console.error("Fel vid hämtning av data:", error);
    }
  };

  return (
    <div className="search">
      <input
        className="search-field"
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Sök efter film..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
          }
        }}
      />
      <button className="search-btn" onClick={handleSearch}>
        Sök
      </button>
    </div>
  );
}

export default HandleSearch;

