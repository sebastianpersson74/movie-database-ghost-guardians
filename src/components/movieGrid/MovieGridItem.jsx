import React from "react";
import { Link } from "react-router-dom";
import MissingPoster from "../../assets/missing-poster.svg"

const MovieGridItem = ({ movie, handleFavoriteToggle, isFavorite }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster !== "N/A" ? movie.Poster : MissingPoster} />
      
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
