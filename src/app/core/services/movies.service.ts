import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MoviesResponse } from '../types/movies-response.interface';
import { Movies } from '../types/movies.interfaces';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly url: string = 'https://api.themoviedb.org/3/movie/upcoming';
  private readonly api_key: string = 'a79056571c625ed7e32f166f7c773d20';
  constructor(private httpClient: HttpClient) {}

  getMovies(): Observable<Movies[]> {
    return this.httpClient
      .get<MoviesResponse>(`${this.url}?api_key=${this.api_key}`)
      .pipe(map((response) => response.results));
  }
}
