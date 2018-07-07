import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.css']
})
export class MoviesGridComponent implements OnInit {

  public movies: Array<any>;
  constructor(public movieService: MovieService) {
    this.movieService.findAllMovies()
      .subscribe(movies => {
        if (movies) {
          this.movies = movies as Array<any>;
        }
      });
  }

  ngOnInit() {
  }

}
