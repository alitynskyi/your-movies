import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API_KEY, BASE_URS } from "../common/constants";
import { IMoviesData } from "../types";

export const movieAPI = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URS }),
  endpoints: (build) => ({
    getTrends: build.query<
      IMoviesData,
      { type: "all" | "movie" | "tv"; page?: number }
    >({
      query: ({ type, page = 1 }) => ({
        url: `/trending/${type}/week`,
        params: {
          api_key: API_KEY,
          page,
        },
      }),
    }),
    getFilms: build.query<IMoviesData, { query: string; page?: number }>({
      query: ({ query, page = 1 }) => ({
        url: "/search/movie",
        params: {
          api_key: API_KEY,
          query,
          page,
        },
      }),
    }),
    getMovieById: build.query<IMoviesData, string>({
      query: (id) => ({
        url: `/movie/${id}`,
        params: {
          api_key: API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetTrendsQuery, useGetFilmsQuery, useGetMovieByIdQuery } =
  movieAPI;

export const { getFilms, getMovieById, getTrends } = movieAPI.endpoints;
