import React from "react";
import "./searchPage.css";
import { useLocation } from "react-router-dom";
import missingPoster from "../../assets/missing-poster.svg";

const MovieSearchCard = () => {
  //Här hämtas datan från sökningen som görs i HandleSearch
  const { state } = useLocation();
  const { data } = state;
  console.log(data);

  return (
    <>
      <ul className="movie-list">
        {data.map((movie, index) => (
          <li key={index} className="movie-container">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : missingPoster}
              alt="film poster"
            />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieSearchCard;

