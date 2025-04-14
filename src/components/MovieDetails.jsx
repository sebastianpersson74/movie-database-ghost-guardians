import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerLink, setTrailerLink] = useState("");

  useEffect(() => {
    // Hämta info från OMDb
    axios.get(`http://www.omdbapi.com/?apikey=420db47c&plot=full&i=${imdbID}`)
      .then(response => {
        if (response.data.Response === "True") {
          setMovie(response.data);
        } else {
          console.error("Filmen hittades inte:", response.data.Error);
        }
      })
      .catch(error => {
        console.error("Fel vid hämtning från OMDb:", error);
      });

    // Hämta trailer från gamla JSON-listan
    axios.get("https://santosnr6.github.io/Data/favoritemovies.json")
      .then(response => {
        const found = response.data.find(movie => movie.imdbID === imdbID);
        if (found) {
          setTrailerLink(found.Trailer_link);
        }
      })
      .catch(error => {
        console.error("Fel vid hämtning av trailer:", error);
      });

  }, [imdbID]);

  if (!movie) return <p>Laddar detaljer...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{movie.Title} ({movie.Year})</h2>
      <img src={movie.Poster} alt={movie.Title} style={{ maxWidth: "200px" }} />
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Regissör:</strong> {movie.Director}</p>
      <p><strong>Skådespelare:</strong> {movie.Actors}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>IMDB-betyg:</strong> {movie.imdbRating}</p>
      <p><strong>Längd:</strong> {movie.Runtime}</p>
      <p><strong>Språk:</strong> {movie.Language}</p>

      {trailerLink && (
        <a href={trailerLink} target="_blank" rel="noreferrer">
          <button style={{ marginTop: "1rem" }}>🎬 Se trailer</button>
        </a>
      )}
    </div>
  );
}

export default MovieDetails;
