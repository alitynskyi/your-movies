import React, { useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PageBase from "../PageBase";
import MoviesList from "../MovieList";

import { useGetTrendsQuery } from "../../services/movieService";

const SeriesPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data: trendsMoviesData } = useGetTrendsQuery({ type: "tv", page });

  return (
    <PageBase>
      <Box pt={10} pb={5}>
        <Container maxWidth="xl">
          {trendsMoviesData && (
            <MoviesList
              movies={trendsMoviesData.results}
              withPagination
              totalPages={trendsMoviesData.total_pages}
              changePage={setPage}
            />
          )}
        </Container>
      </Box>
    </PageBase>
  );
};

export default SeriesPage;
