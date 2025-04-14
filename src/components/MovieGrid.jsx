import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFavourites } from "../hooks/useFavorites";

import MovieGridItem from "./MovieGridItem";

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

  const { handleFavoriteToggle, favoritedIds } = useFavourites();

  return (
    <div>
      <h2>Filmlista</h2>
      {movies.length === 0 ? (
        <p>Laddar filmer...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {movies.map((movie) => (
            <MovieGridItem
              handleFavoriteToggle={handleFavoriteToggle}
              favorited={favoritedIds.includes(movie.imdbID)}
              key={movie.imdbID}
              movie={movie}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieGrid;
