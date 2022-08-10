import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MoviesList from "../../Unknown/MovieList";
import Loader from "../../Unknown/Loader";

import { useGetTrendsQuery } from "../../../services/movieService";

const HomePage = () => {
  const { data: trendsMoviesData, isLoading } = useGetTrendsQuery({
    type: "all",
  });

  return (
    <Box pt={18} pb={5} height="100%" display="flex" flexDirection="column">
      <Typography variant="h4">In trends</Typography>
      <Typography mb={6}>Best movies on this week</Typography>

      {isLoading && <Loader />}

      {trendsMoviesData?.results && (
        <MoviesList movies={trendsMoviesData.results} />
      )}
    </Box>
  );
};
export default HomePage;
