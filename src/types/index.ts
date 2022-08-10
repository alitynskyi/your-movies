type Genre = {
  id: number;
  name: string;
};

export type Actor = {
  id: number;
  credit_id: string;
  character: string;
  name: string;
  profile_path: string;
};

type ReviewAuthor = {
  avatar_path: string;
  name: string;
  rating: number;
  username: string;
};

export type Review = {
  id: string;
  author: string;
  author_details: ReviewAuthor;
  content: string;
};

export interface IMovie {
  id: number;
  title: string;
  name: string;
  original_title: string;
  original_name: string;
  overview: string;
  release_date: string;
  first_air_date: string;
  last_air_date: string;
  number_of_seasons: number;
  number_of_episodes: number;
  vote_average: number;
  poster_path: string;
  media_type: string;
  tagline: string;
  budget: number;
  revenue: number;
  runtime: number;
  episode_run_time: number[];
  homepage: string;
  genres: Genre[];
}

export interface IMoviesData {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IMovieCastData {
  id: number;
  cast: Actor[];
}

export interface IMovieReviewsData {
  id: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
}
