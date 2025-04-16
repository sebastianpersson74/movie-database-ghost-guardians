import axios from "axios";
import React, { useEffect, useState } from "react";
import "./movieGrid.css";
import MovieGridItem from "./MovieGridItem";
import Trailers from "./Trailers";
import { useFavourites } from "../hooks/useFavorites";

function MovieGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://santosnr6.github.io/Data/favoritemovies.json")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Fel vid hämtning av data:", error);
      });
  }, []);

  const { favoritedIds, handleFavoriteToggle } = useFavourites();

  return (
    <div className="movie-wrapper">
      <Trailers />
      <h2>🎬 Våra favoritfilmer</h2>
      {movies.length === 0 ? (
        <p>Laddar filmer...</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (

            <MovieGridItem
              key={movie.imdbID}
              movie={movie}
              handleFavoriteToggle={handleFavoriteToggle}
              isFavorite={favoritedIds.includes(movie.imdbID)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieGrid;
