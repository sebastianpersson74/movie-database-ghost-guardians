import React from "react";
import { useFavourites } from "../hooks/useFavorites";
import Header from "./header/Header";
import MovieGridItem from "./MovieGridItem";

const FavouritePage = () => {
  const { handleFavoriteToggle, favoritedIds, favoritedMovies } =
    useFavourites();

  return (
    <>
      <Header showSearch={false} />
      <h2>Favorited Filmlista</h2>
      {favoritedMovies.length === 0 ? (
        <p>No Favorites</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {favoritedMovies.map((movie) => (
            <MovieGridItem
              handleFavoriteToggle={handleFavoriteToggle}
              favorited={favoritedIds.includes(movie.imdbID)}
              key={movie.imdbID}
              movie={movie}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default FavouritePage;
