import { format } from "date-fns";

import { IMovie } from "../types";

const formatedReleaseDate = (movie: IMovie) => {
  const { release_date, first_air_date } = movie;

  if (release_date) return format(new Date(release_date), "Y");

  if (first_air_date) return format(new Date(first_air_date), "Y");

  if (!release_date && !first_air_date) return "";
};

export default formatedReleaseDate;
