import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API_KEY, BASE_URS } from "../common/constants";
import { IMoviesData } from "../types";

export const movieAPI = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URS }),
  endpoints: (build) => ({
    fetchTrends: build.query<IMoviesData, number>({
      query: (page: number = 1) => ({
        url: "/trending/all/week",
        params: {
          api_key: API_KEY,
          page,
        },
      }),
    }),
  }),
});
