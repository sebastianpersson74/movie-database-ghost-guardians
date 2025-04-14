import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <h2>Filmlista</h2>
      {movies.length === 0 ? (
        <p>Laddar filmer...</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
          {movies.map((movie) => (
            <div key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <img src={movie.Poster} alt={movie.Title} style={{ width: "100%" }} />
            <Link to={`/movie/${movie.imdbID}`}>
                <button>Läs mer</button>
            </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieGrid;
