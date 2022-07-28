import React, { useState } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PageBase from "../../Unknown/PageBase";
import MoviesList from "../../Unknown/MovieList";

import { useGetTrendsQuery } from "../../../services/movieService";

const SeriesPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data: trendsMoviesData } = useGetTrendsQuery({ type: "tv", page });

  return (
    <PageBase>
      <Box pt={10} pb={5}>
        <Container maxWidth="xl">
          <Typography variant="h4">All series</Typography>
          <Typography mb={6}>Series from all over the world</Typography>

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
