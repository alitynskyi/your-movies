import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IMoviesData } from "../../types";

export const fetchPopularMovie = createAsyncThunk(
  "movie/fetchPopularMovie",
  async (page: number, thunkAPI) => {
    try {
      const response = await axios.get<IMoviesData>(
        `https://api.themoviedb.org/3/trending/all/week?page=${page}&api_key=6ab460452e9d6fb8f59cab399bd5ef0f`,
      );

      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : "Unknown error",
      );
    }
  },
);
