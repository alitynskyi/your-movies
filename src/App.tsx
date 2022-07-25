import React, { useEffect } from "react";

import { Button } from "@mui/material";

import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchPopularMovie } from "./store/movies/movieActions";

function App() {
  const { movies, error } = useAppSelector((state) => state.movieReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovie());
  }, [dispatch]);

  return (
    <div>
      <Button>asdqwe</Button>
    </div>
  );
}

export default App;
