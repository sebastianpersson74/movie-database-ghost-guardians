import React from "react";
import Header from "./components/header/Header";
import MovieGrid from "./components/MovieGrid";
import Carousel from "./components/Trailers";

function App() {
  return (
    <>
      <Header showSearch={true} />
      <div>
        <h1>Trailerkarusell 🎬</h1>
        <Carousel />
      </div>
      <MovieGrid />
    </>
  );
}

export default App;
