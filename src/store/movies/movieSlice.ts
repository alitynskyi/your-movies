import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../../types";
import { fetchPopularMovie } from "./movieOperations";

interface MovieState {
  movies: IMovie[];
  page: number;
  isLoading: boolean;
  error: string;
}

const initialState: MovieState = {
  movies: [],
  page: 1,
  isLoading: false,
  error: "",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPopularMovie.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPopularMovie.fulfilled.type]: (
      state,
      action: PayloadAction<IMovie[]>,
    ) => {
      state.isLoading = false;
      state.error = "";
      state.movies = [...state.movies, ...action.payload];
    },
    [fetchPopularMovie.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default movieSlice.reducer;
