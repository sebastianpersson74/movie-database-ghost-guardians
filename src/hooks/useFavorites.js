import { useEffect, useMemo, useState } from "react";

export const useFavourites = () => {
  const [favoritedMovies, setFavoritedMovies] = useState([]);

  const favoritedIds = useMemo(
    () => favoritedMovies.map((movie) => movie.imdbID),
    [favoritedMovies],
  );

  useEffect(() => {
    const storedMovies =
      JSON.parse(localStorage.getItem("favoritedMovies")) || [];
    setFavoritedMovies(storedMovies);
  }, []);

  const handleFavoriteToggle = (movie) => {
    const updatedMovies = favoritedIds.includes(movie.imdbID)
      ? favoritedMovies.filter((m) => m.imdbID !== movie.imdbID)
      : [...favoritedMovies, movie];
    setFavoritedMovies(updatedMovies);
    localStorage.setItem("favoritedMovies", JSON.stringify(updatedMovies));
  };

  return {
    favoritedIds,
    favoritedMovies,
    handleFavoriteToggle,
  };
};
