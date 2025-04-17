import { useEffect, useMemo, useState } from "react";

const FAV_LS_KEY = "FAVORITED_MOVIES";

export const useFavourites = () => {
  const [favoritedMovies, setFavoritedMovies] = useState([]);

  const favoritedIds = useMemo(
    () => favoritedMovies.map((movie) => movie.imdbID),
    [favoritedMovies],
  );

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem(FAV_LS_KEY)) || [];
    setFavoritedMovies(storedMovies);
  }, []);

  const handleFavoriteToggle = (movie) => {
    const updatedMovies = favoritedIds.includes(movie.imdbID)
      ? favoritedMovies.filter((m) => m.imdbID !== movie.imdbID)
      : [...favoritedMovies, movie];
    setFavoritedMovies(updatedMovies);
    localStorage.setItem(FAV_LS_KEY, JSON.stringify(updatedMovies));
  };

  return {
    favoritedIds,
    favoritedMovies,
    handleFavoriteToggle,
  };
};
