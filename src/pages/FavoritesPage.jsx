import React from "react";
import { useFavourites } from "../hooks/useFavorites";
import MovieGridItem from "../components/movieGrid/MovieGridItem";

const FavoritesPage = () => {
  const { handleFavoriteToggle, favoritedMovies } = useFavourites();

  return (
    <div>
      <h1 className="fav_header">Favorited Movies</h1>
      {favoritedMovies.length === 0 && <p>No favorites</p>}
      {favoritedMovies.length > 0 && (
        <div className="movie-grid">
          {favoritedMovies.map((movie) => (
            <MovieGridItem
              key={movie.imdbID}
              movie={movie}
              handleFavoriteToggle={handleFavoriteToggle}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
