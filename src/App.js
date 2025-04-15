import { Routes, Route } from "react-router-dom";
import MovieGrid from "./components/MovieGrid";
import MovieDetails from "./components/MovieDetails";
import Trailers from "./components/Trailers";
import Header from "./components/header/Header";
import SearchPage from "./components/movieSearch/SearchPage";

function App() {
  return (
    <div>
      <Header />
      <h1>Trailerkarusell 🎬</h1>
      <Trailers />

      <Routes>
        <Route path="/" element={<MovieGrid />} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
