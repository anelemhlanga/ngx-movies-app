import { Movies } from './movies.interfaces';

export interface MoviesResponse {
  page: number;
  results: Movies[];
  total_pages: number;
  total_results: number;
}
