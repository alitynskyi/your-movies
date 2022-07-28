import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchBarCard from "../SearchBarCard";

import { IMovie } from "../../../types";
import useStyles from "./useStyles";

interface SearchBarListProps {
  movies?: IMovie[];
  mediaType: "movie" | "tv";
}

const SearchBarList: React.FC<SearchBarListProps> = ({ movies, mediaType }) => {
  const classes = useStyles();

  if (!movies || movies.length === 0)
    return (
      <Box px={3} py={5}>
        <Typography variant="subtitle2" color="common.white" textAlign="center">
          Sorry... No results for your query.
        </Typography>
      </Box>
    );

  return (
    <Box className={classes.searchListWrapper}>
      {movies.map((movie) => (
        <SearchBarCard key={movie.id} movie={movie} mediaType={mediaType} />
      ))}
    </Box>
  );
};

export default SearchBarList;
