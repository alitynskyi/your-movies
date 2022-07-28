import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import PageBase from "../../Unknown/PageBase";
import MoviesList from "../../Unknown/MovieList";
import Loader from "../../Unknown/Loader";

import { useGetMoviesByTypeQuery } from "../../../services/movieService";

const SearchPage = () => {
  const [page, setPage] = useState(1);
  const { query } = useParams();

  const { data: moviesData } = useGetMoviesByTypeQuery({
    query: query ?? "",
    type: "movie",
    page,
  });

  return (
    <PageBase>
      <Box pt={10} pb={5}>
        <Container maxWidth="xl">
          <Typography variant="h5" mb={6}>
            Search results for:{" "}
            <span style={{ fontStyle: "italic" }}>{query}</span>
          </Typography>

          {moviesData ? (
            <MoviesList
              movies={moviesData.results}
              withPagination
              totalPages={moviesData.total_pages}
              changePage={setPage}
            />
          ) : (
            <Loader height="80vh" />
          )}

          {moviesData?.results.length === 0 && (
            <Box mt={5}>
              <Typography>No results for your query</Typography>
            </Box>
          )}
        </Container>
      </Box>
    </PageBase>
  );
};
export default SearchPage;
