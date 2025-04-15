import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./movieGrid.css";
import Trailers from "./Trailers";


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

    <div className="movie-wrapper">
            <Trailers />
      <h2>🎬 Våra favoritfilmer</h2>
      {movies.length === 0 ? (
        <p>Laddar filmer...</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <div className="movie-info">
                <h3>{movie.Title}</h3>
                <Link to={`/movie/${movie.imdbID}`}>
                  <button>Läs mer</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieGrid;
