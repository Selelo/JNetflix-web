import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {flatMap} from 'rxjs/operators';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  public movie: any;
  public player: YT.Player;
  constructor(public router: ActivatedRoute, public movieService: MovieService) {
    this.router.params
        .pipe(flatMap(params => this.movieService.getMovieById(params.id)))
        .subscribe(movie => {
            this.movie = movie;
        });
  }

  ngOnInit() {
  }

    savePlayer(player) {
        this.player = player;
        console.log('player instance', player);
    }
    static onStateChange(event) {
        console.log('player state', event.data);
    }

}
