import React, { useEffect } from "react";

import PageBase from "./components/PageBase";

import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchPopularMovie } from "./store/movies/movieActions";

function App() {
  const { movies, error } = useAppSelector((state) => state.movieReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovie());
  }, [dispatch]);

  return (
    <PageBase>
      <div>qwe</div>
    </PageBase>
  );
}

export default App;
