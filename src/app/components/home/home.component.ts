import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Observable<any>;
  constructor(private movieService: MovieService) {
    this.movies = this.movieService.findAllMovies();
  }

  ngOnInit() {
  }

}
