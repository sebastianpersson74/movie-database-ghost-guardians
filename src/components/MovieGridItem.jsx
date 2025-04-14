import React from "react";
import { Link } from "react-router-dom";

const MovieGridItem = ({ movie, favorited, handleFavoriteToggle }) => {
  return (
    <div style={{ position: "relative" }} key={movie.imdbID}>
      <span
        onClick={() => handleFavoriteToggle(movie)}
        style={{ position: "absolute", top: 5, right: 5, cursor: "pointer" }}
      >
        {favorited ? "★" : "☆"}
      </span>
      <h3>{movie.Title}</h3>
      <img src={movie.Poster} alt={movie.Title} style={{ width: "100%" }} />

      <a href={movie.Trailer_link} target="_blank" rel="noopener noreferrer">
        Se trailer
      </a>

      <Link to={`/movie/${movie.imdbID}`}>
        <button>Läs mer</button>
      </Link>
    </div>
  );
};

export default MovieGridItem;
