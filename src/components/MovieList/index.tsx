import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MoviesListItem from "../MovieListItem";
import Pagination from "../Pagination";

import { IMovie } from "../../types";

interface MoviesListProps {
  movies: IMovie[];
  totalPages: number;
  changePage: (page: number) => void;
}

const MoviesList: React.FC<MoviesListProps> = ({
  movies,
  totalPages,
  changePage,
}) => {
  return (
    <Box>
      <Grid
        container
        spacing={6}
        columns={{ xs: 4, md: 6, lg: 8, xl: 10 }}
        mb={10}
      >
        {movies.map((movie) => (
          <Grid key={movie.id} item xs={2}>
            <MoviesListItem movie={movie} />
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center">
        <Pagination
          count={totalPages}
          onChange={(_, page) => changePage(page)}
        />
      </Box>
    </Box>
  );
};

export default MoviesList;
