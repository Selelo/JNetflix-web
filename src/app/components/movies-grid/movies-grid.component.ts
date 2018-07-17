import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.css']
})
export class MoviesGridComponent implements OnInit, OnChanges {

  @Input() public filter: number;
  @Input() public myList: boolean;
  public movies: Array<any>;
  constructor(public movieService: MovieService, private sanitization: DomSanitizer, public router: Router) {
  }

  ngOnInit() {
      console.log(this.filter);
      this.findMovies();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.filter) {
        const filter = changes.filter.currentValue;
        console.log('nuevo filter: ', filter);
        console.log('nuevo filter current: ', this.filter);
    }
    this.findMovies();
  }


  private findMovies() {
      let findObservable;
      if (this.myList) {
          findObservable = this.movieService.findMyList();
      } else {
          findObservable = Number(this.filter) === 0
              ? this.movieService.findAllMovies()
              : this.movieService.findMoviesByGender(this.filter);
      }
      console.log(findObservable);
      findObservable
          .subscribe(movies => {
              if (movies) {
                  console.log(this.movies);
                  this.movies = movies as Array<any>;
              }
          });
  }

  public addFavoriteMovie(movie: any) {
      this.movieService.addFavorite(movie)
          .subscribe((resp: any) => {
              if(resp.method === 'DELETE') {
                  alert(`La pelicula ${movie.name} ha sido eliminada de tus favoritos`);
              } else if(resp.method === 'SAVE') {
                  alert(`La pelicula ${movie.name} ha sido añadida a tus favoritos`);
              }
          });
      this.movies.map(currentMovie => {
          if(currentMovie.id === movie.id) {
              currentMovie.favorite = !currentMovie.favorite;
          }
      });
  }

  public showMovie(id: number, event: any) {
      if(event.target.nodeName == 'I') {
          return;
      }
      this.router.navigate([`/movie/${id}`]);
}

  public clearImgUrl(movieId: string) {
      const image = `https://img.youtube.com/vi/${movieId}/hqdefault.jpg`;
      return this.sanitization.bypassSecurityTrustStyle(`url(${image})`);
  }

}
