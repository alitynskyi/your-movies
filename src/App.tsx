import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import FilmsPage from "./components/FilmsPage";
import SeriesPage from "./components/SeriesPage";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/films" element={<FilmsPage />} />
      <Route path="/films/:movieId" element={<MovieDetails />} />
      <Route path="/series" element={<SeriesPage />} />
      <Route path="*" element={<p>404</p>} />
    </Routes>
  );
}

export default App;
