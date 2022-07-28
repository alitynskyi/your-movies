import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import FilmsPage from "./components/FilmsPage";
import SeriesPage from "./components/SeriesPage";

import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/films" element={<FilmsPage />} />
      <Route path="/films/:movieId" element={<>FilmPage</>} />
      <Route path="/series" element={<SeriesPage />} />
      <Route path="/series/:movieId" element={<>SeriesPage</>} />
      <Route path="/search" element={<>SearchPage</>} />
      <Route path="*" element={<SearchBar />} />
    </Routes>
  );
}

export default App;
