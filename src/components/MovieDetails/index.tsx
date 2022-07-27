import React from "react";
import {
  NavLink,
  useParams,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PageBase from "../PageBase";

import { movieAPI, useGetMovieByIdQuery } from "../../services/movieService";
import { AddBox } from "@mui/icons-material";

type MovieDetailsParams = {
  movieId: string;
};

const MovieDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams<MovieDetailsParams>();

  const { data } = useGetMovieByIdQuery(movieId ?? "");

  return (
    <PageBase>
      <Box bgcolor="#f4f4f4" height="100vh">
        <Container
          maxWidth="lg"
          sx={{ backgroundColor: "#fff", height: "100%" }}
        >
          qwe
        </Container>
      </Box>
    </PageBase>
  );
};

export default MovieDetails;
