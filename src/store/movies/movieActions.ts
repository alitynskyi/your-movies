import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPopularMovie = createAsyncThunk(
  "movie/fetchPopularMovie",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=6ab460452e9d6fb8f59cab399bd5ef0f",
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : "Unknown error",
      );
    }
  },
);
