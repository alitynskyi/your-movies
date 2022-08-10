import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API_KEY, BASE_URS } from "../common/constants";
import {
  IMovie,
  IMoviesData,
  IMovieCastData,
  IMovieReviewsData,
} from "../types";

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
    getMoviesByType: build.query<
      IMoviesData,
      { query: string; type: "movie" | "tv"; page?: number }
    >({
      query: ({ query, type, page = 1 }) => ({
        url: `search/${type}`,
        params: {
          api_key: API_KEY,
          query,
          page,
        },
      }),
    }),
    getMovieCast: build.query<
      IMovieCastData,
      { movieId: string; type: "movie" | "tv" }
    >({
      query: ({ movieId, type }) => ({
        url: `${type}/${movieId}/credits`,
        params: {
          api_key: API_KEY,
        },
      }),
    }),
    getMovieReviews: build.query<
      IMovieReviewsData,
      { movieId: string; type: "movie" | "tv"; page?: number }
    >({
      query: ({ movieId, type, page = 1 }) => ({
        url: `${type}/${movieId}/reviews`,
        params: {
          api_key: API_KEY,
          page,
        },
      }),
    }),
    getFilmById: build.query<IMovie, string>({
      query: (id) => ({
        url: `/movie/${id}`,
        params: {
          api_key: API_KEY,
        },
      }),
    }),
    getSeriesById: build.query<IMovie, string>({
      query: (id) => ({
        url: `/tv/${id}`,
        params: {
          api_key: API_KEY,
        },
      }),
    }),
  }),
});

export const {
  useGetTrendsQuery,
  useGetMoviesByTypeQuery,
  useLazyGetMoviesByTypeQuery,
  useGetMovieCastQuery,
  useGetMovieReviewsQuery,
  useGetFilmByIdQuery,
  useGetSeriesByIdQuery,
} = movieAPI;
