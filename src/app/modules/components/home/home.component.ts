import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movies } from '../../../core/types/movies.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: Movies[];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getMovies().subscribe({
      next: (response: any) => {
        this.movies = response;
        console.log('movies', this.movies);
      },
      error: (error) => {
        console.error('error', error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
