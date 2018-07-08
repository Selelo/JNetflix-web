import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.css']
})
export class MoviesGridComponent implements OnInit, OnChanges {

  @Input() public filter: number;
  public movies: Array<any>;
  constructor(public movieService: MovieService) {
  }

  ngOnInit() {
      console.log(this.filter);
      this.findMovies();
  }

  ngOnChanges(changes: SimpleChanges) {
    const filter = changes.filter.currentValue;
    console.log('nuevo filter: ', filter);
    this.findMovies();
  }


  private findMovies() {
      const findObservable = this.filter === 0
          ? this.movieService.findAllMovies()
          : this.movieService.findMoviesByGender(this.filter);

      findObservable
          .subscribe(movies => {
              if (movies) {
                  this.movies = movies as Array<any>;
              }
          });
  }

}
