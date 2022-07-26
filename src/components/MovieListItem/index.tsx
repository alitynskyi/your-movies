import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";

import formatedPosterImage from "../../common/formatedPosterImage";
import formatedMediaType from "../../common/formatedMediaType";
import formatedReleaseDate from "../../common/formatedReleaseDate";
import { IMovie } from "../../types";

interface MoviesListItemProps {
  movie: IMovie;
}

const MoviesListItem: React.FC<MoviesListItemProps> = ({ movie }) => {
  const type = formatedMediaType(movie.media_type);
  const releaseDate = formatedReleaseDate(movie);
  const [url, alt] = formatedPosterImage(movie);
  const average = movie.vote_average ? movie.vote_average.toFixed(1) : null;

  return (
    <Box position="relative">
      <Card elevation={0} onClick={() => console.log(movie.id)}>
        {average && (
          <Box position="absolute" top={10} left={10} zIndex={1}>
            <Chip label={average} color="primary" />
          </Box>
        )}

        <CardActionArea>
          <CardMedia component="img" image={url} alt={alt} />

          <CardContent>
            <Typography gutterBottom variant="h6">
              {movie.title ?? movie.name}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {releaseDate}, {type}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default MoviesListItem;
