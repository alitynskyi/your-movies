import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/Home/HomePage";
import FilmsPage from "./components/Films/FilmsPage";
import SeriesPage from "./components/Series/SeriesPage";
import SearchPage from "./components/Search/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/films" element={<FilmsPage />} />
      <Route path="/films/:movieId" element={<>FilmPage</>} />
      <Route path="/series" element={<SeriesPage />} />
      <Route path="/series/:movieId" element={<>SeriesPage</>} />
      <Route path="/search/:query" element={<SearchPage />} />
      <Route path="*" element={<>404</>} />
    </Routes>
  );
}

export default App;
