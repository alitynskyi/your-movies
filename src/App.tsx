import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<>MoviesPage</>} />
      <Route path="/series" element={<>SeriesPage</>} />
      <Route path="*" element={<p>404</p>} />
    </Routes>
  );
}

export default App;
