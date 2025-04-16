import { Routes, Route } from "react-router-dom";
import MovieGrid from "./pages/MovieGrid";
import MovieDetails from "./components/movieDetails/MovieDetails";
import Header from "./components/header/Header";
import MovieSearchCard from "./pages/MovieSearchCard";
import FavoritesPage from "./pages/FavoritesPage";


function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<MovieGrid />} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        <Route path="/search" element={<MovieSearchCard />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
