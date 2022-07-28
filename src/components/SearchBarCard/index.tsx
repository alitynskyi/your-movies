import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

import formatedPosterImage from "../../common/formatedPosterImage";
import formatedReleaseDate from "../../common/formatedReleaseDate";
import { IMovie } from "../../types";
import useStyles from "./useStyles";

interface SearchBarCardProps {
  movie: IMovie;
  mediaType: "movie" | "tv";
}

const SearchBarCard: React.FC<SearchBarCardProps> = ({ movie, mediaType }) => {
  const releaseDate = formatedReleaseDate(movie);
  const [url, alt] = formatedPosterImage(movie);
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "0";
  const linkToDetails =
    mediaType === "movie" ? `/films/${movie.id}` : `/series/${movie.id}`;

  const classes = useStyles();

  return (
    <Box component={RouterLink} to={linkToDetails} className={classes.card}>
      <Box mr={4} display="flex">
        <img src={url} alt={alt} width={50} />
      </Box>

      <Box pt={1} flexGrow={1}>
        <Typography variant="body1" color="common.white">
          {movie.title ?? movie.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {releaseDate}
        </Typography>
      </Box>

      {rating && (
        <Box display="flex" ml={4} pt={1}>
          <Typography variant="body1" color="common.white">
            {rating}
          </Typography>
          <StarIcon sx={{ fontSize: 14, color: "yellow" }} />
        </Box>
      )}
    </Box>
  );
};

export default SearchBarCard;
