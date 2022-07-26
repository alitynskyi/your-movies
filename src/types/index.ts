export interface IMovie {
  id: number;
  title: string;
  name: string;
  overview: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  poster_path: string;
  media_type: string;
}

export interface IMoviesData {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: 20000;
}
