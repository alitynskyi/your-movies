import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MoviesList from "../../Unknown/MovieList";
import Loader from "../../Unknown/Loader";

import { useGetTrendsQuery } from "../../../services/movieService";

const FilmsPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data: trendsMoviesData, isLoading } = useGetTrendsQuery({
    type: "movie",
    page,
  });

  return (
    <Box pt={18} pb={5} height="100%" display="flex" flexDirection="column">
      <Typography variant="h4">All films</Typography>
      <Typography mb={6}>Films from all over the world</Typography>

      {isLoading && <Loader />}

      {trendsMoviesData?.results && (
        <MoviesList
          movies={trendsMoviesData.results}
          withPagination
          totalPages={trendsMoviesData.total_pages}
          changePage={setPage}
        />
      )}
    </Box>
  );
};

export default FilmsPage;
