import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ReviewCard from "../ReviewCard";
import Loader from "../Loader";

import { useGetMovieReviewsQuery } from "../../../services/movieService";
import { MediaType } from "../../../types";

interface MovieDetailsTabReviewsProps {
  type: MediaType;
  movieId: string;
}

const MovieDetailsTabReviews: React.FC<MovieDetailsTabReviewsProps> = ({
  movieId,
  type,
}) => {
  const { data, isLoading } = useGetMovieReviewsQuery({
    movieId,
    type,
  });

  return (
    <Box pt={5}>
      {isLoading && <Loader />}

      {data && data.results.length !== 0 ? (
        data.results.map((review, index) => (
          <Box
            py={3}
            borderTop={index === 0 ? "none" : "1px solid"}
            borderColor="primary.main"
            key={review.id}
          >
            <ReviewCard review={review} />
          </Box>
        ))
      ) : (
        <Typography>There are no reviews yet</Typography>
      )}
    </Box>
  );
};

export default MovieDetailsTabReviews;
