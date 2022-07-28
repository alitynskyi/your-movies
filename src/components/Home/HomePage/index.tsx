import React from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import PageBase from "../../Unknown/PageBase";
import MoviesList from "../../Unknown/MovieList";
import Loader from "../../Unknown/Loader";

import { useGetTrendsQuery } from "../../../services/movieService";

const HomePage = () => {
  const { data: trendsMoviesData } = useGetTrendsQuery({ type: "all" });

  return (
    <PageBase>
      <Box pt={10} pb={5}>
        <Container maxWidth="xl">
          <Typography variant="h4">In trends</Typography>
          <Typography mb={6}>Best movies on this week</Typography>

          {trendsMoviesData ? (
            <MoviesList movies={trendsMoviesData.results} />
          ) : (
            <Loader height="80vh" />
          )}
        </Container>
      </Box>
    </PageBase>
  );
};
export default HomePage;
