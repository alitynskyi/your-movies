import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MoviesList from "../../Unknown/MovieList";
import Loader from "../../Unknown/Loader";

import { useGetMoviesByTypeQuery } from "../../../services/movieService";

const SearchPage = () => {
  const [page, setPage] = useState(1);
  const { query } = useParams();

  const { data: moviesData, isLoading } = useGetMoviesByTypeQuery({
    query: query ?? "",
    type: "movie",
    page,
  });

  return (
    <Box pt={18} pb={5} height="100%" display="flex" flexDirection="column">
      <Typography variant="h5" mb={6}>
        Search results for: <span style={{ fontStyle: "italic" }}>{query}</span>
      </Typography>

      {isLoading && <Loader />}

      {moviesData?.results.length ? (
        <MoviesList
          movies={moviesData.results}
          withPagination
          totalPages={moviesData.total_pages}
          changePage={setPage}
        />
      ) : (
        <Box mt={5}>
          <Typography>No results for your query</Typography>
        </Box>
      )}
    </Box>
  );
};
export default SearchPage;
