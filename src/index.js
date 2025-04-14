import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MovieDetails from "./components/MovieDetails";
import SearchPage from "./components/movieSearch/SearchPage";
import FavouritePage from "./components/FavouritePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/movie/:imdbID",
    element: <MovieDetails />,
  },
  {
    path: "favorites",
    element: <FavouritePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
