import React from "react";
import { Link } from "react-router-dom";

const MovieGridItem = ({ movie, handleFavoriteToggle, isFavorite }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="movie-info-container">
        <div className="movie-info">
          <h3>{movie.Title}</h3>
          <Link to={`/movie/${movie.imdbID}`}>
            <button>Läs mer</button>
          </Link>
        </div>
        <span onClick={() => handleFavoriteToggle(movie)}>
          {isFavorite ? "★" : "☆"}
        </span>
      </div>
    </div>
  );
};

export default MovieGridItem;
