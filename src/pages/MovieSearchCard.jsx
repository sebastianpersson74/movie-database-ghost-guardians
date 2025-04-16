import React from "react";
import { useLocation } from "react-router-dom";
import { useFavourites } from "../hooks/useFavorites";
import MovieGridItem from "../components/movieGrid/MovieGridItem";

const MovieSearchCard = () => {
  //Här hämtas datan från sökningen som görs i HandleSearch
  const { state } = useLocation();
  const { data } = state;
  const { favoritedIds, handleFavoriteToggle } = useFavourites();

  return (
    <>
      <ul className="movie-grid">
        {data.map((movie) => (
          <MovieGridItem
            key={movie.imdbID}
            movie={movie}
            handleFavoriteToggle={handleFavoriteToggle}
            isFavorite={favoritedIds.includes(movie.imdbID)}
          />
        ))}
      </ul>
    </>
  );
};

// const MovieSearchCard = () => {
//   //Här hämtas datan från sökningen som görs i HandleSearch
//   const { state } = useLocation();
//   const { data } = state;
//
//   return (
//     <>
//       <ul className="movie-list">
//         {data.map((movie, index) => (
//           <li key={index} className="movie-container">
//             <img
//               src={movie.Poster !== "N/A" ? movie.Poster : missingPoster}
//               alt="film poster"
//             />
//             <h3>{movie.Title}</h3>
//             <p>{movie.Year}</p>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

export default MovieSearchCard;
