import { Routes, Route } from "react-router-dom";
import MovieGrid from "./components/MovieGrid";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/header/Header";
import SearchPage from "./components/movieSearch/SearchPage";
import FavoritesPage from "./components/FavoritesPage";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<MovieGrid />} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
