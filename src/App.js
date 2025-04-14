
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MovieGrid from "./components/MovieGrid";
import MovieDetails from "./components/MovieDetails";
import Carousel from "./components/Trailers";
import MovieGrid from "./components/MovieGrid";

function App() {

    return (
          <div>
      <h1>Trailerkarusell 🎬</h1>
      <Carousel />
        </div>
      
        <Router>
            <Routes>
                <Route path ="/" element={<MovieGrid />} />
                <Route path ="/movie/:imdbID" element={<MovieDetails />} />
            </Routes>
        </Router>

    );
}

      <MovieGrid />
  );
}

export default App;
