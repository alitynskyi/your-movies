import { IMovie } from "../types";

const formatedPosterImage = (movie: IMovie) => {
  const { title, name, poster_path } = movie;

  const url = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "/not-found.png";

  const alt = title ?? name;

  return [url, alt];
};

export default formatedPosterImage;
