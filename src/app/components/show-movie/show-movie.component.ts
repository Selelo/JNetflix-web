import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, flatMap} from 'rxjs/operators';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  public movie: any;
  public player: YT.Player;
  public prevUrl: string;
  constructor(public activatedRouter: ActivatedRoute, public movieService: MovieService) {
    this.activatedRouter.params
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
    public onStateChange(event) {
        console.log('player state', event.data);
    }

}
