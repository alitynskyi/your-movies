import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import PageBase from "../PageBase";
// import Hero from "../Hero";
import MoviesList from "../MovieList";

import { movieAPI } from "../../services/movieService";

const HomePage = () => {
  const [pageCurrent, setCurrentPage] = useState(1);

  const { data: trendsMovies } = movieAPI.useFetchTrendsQuery(pageCurrent);

  console.log(trendsMovies?.results);

  return (
    <PageBase>
      <Box pt={10} pb={5}>
        {/* {trendsMovies && <Hero movie={trendsMovies.results[0]} />} */}

        <Container maxWidth="xl">
          <Typography variant="h4" mb={6}>
            Trending this week
          </Typography>

          {trendsMovies ? (
            <MoviesList
              movies={trendsMovies.results}
              totalPages={trendsMovies.total_pages}
              changePage={setCurrentPage}
            />
          ) : (
            <Box
              height="80vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CircularProgress size={100} />
            </Box>
          )}
        </Container>
      </Box>
    </PageBase>
  );
};
export default HomePage;
