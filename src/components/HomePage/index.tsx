import React from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import PageBase from "../PageBase";
import MoviesList from "../MovieList";
import Loader from "../Loader";

import { useGetTrendsQuery } from "../../services/movieService";

const HomePage = () => {
  const { data: trendsMoviesData } = useGetTrendsQuery({ type: "all" });

  return (
    <PageBase>
      <Box pt={10} pb={5}>
        <Container maxWidth="xl">
          <Typography variant="h4" mb={6}>
            Trending this week
          </Typography>

          {trendsMoviesData ? (
            <MoviesList movies={trendsMoviesData.results} withPagination />
          ) : (
            <Loader height="80vh" />
          )}
        </Container>
      </Box>
    </PageBase>
  );
};
export default HomePage;
