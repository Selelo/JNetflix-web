import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { api } from '../config';
import {AuthService} from './auth.service';
import {flatMap, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(public http: HttpClient, public authService: AuthService) { }

  public findAllMovies() {
      return this.authService.getCurrentUser()
          .pipe(flatMap(currentUser => {
              let params = new HttpParams().append('profile', '0');
              const url = api + '/movieWithFavorite';
              console.log("CURRENTUSER::::: ", currentUser);
              if(currentUser) {
                  const profileId = currentUser.profileSelected
                  && currentUser.profileSelected.id
                      ? currentUser.profileSelected.id
                      : 0;
                  params = params.set('profile', profileId);
              }
              return this.http.get(url, {params});
          }));
  }

  public findMoviesByGender(gender: number) {
    const url = api + 'movieByGender';
    return this.authService.getCurrentUser()
        .pipe(
        map(currentUser => {
            const profileId = currentUser.profileSelected
            && currentUser.profileSelected.id
                ? currentUser.profileSelected.id
                : 0;

            return new HttpParams()
                .append('gender', gender.toString(10))
                .append('profile', profileId);
        }),
        flatMap(params => this.http.get(url, {params})));

  }

  public findMyList() {
      return this.authService.getCurrentUser()
          .pipe(flatMap(currentUser => {
              console.log(currentUser);
              const url = api + 'movieByProfile';
              const profileId = currentUser.profileSelected
              && currentUser.profileSelected.id
                  ? currentUser.profileSelected.id
                  : 0;
              const params = new HttpParams()
                  .append('profile', profileId);
              return this.http.get(url, {params});
          }));
  }

    public findFavorites() {
        return this.authService.getCurrentUser()
            .pipe(flatMap(currentUser => {
                console.log(currentUser);
                const url = api + 'movieByProfile';
                const profileId = currentUser.profileSelected
                && currentUser.profileSelected.id
                    ? currentUser.profileSelected.id
                    : 0;
                const params = new HttpParams()
                    .append('profile', profileId);
                return this.http.get(url, {params});
            }));
    }

  public addFavorite(movie: any) {
      return this.authService.getCurrentUser()
          .pipe(flatMap(currentUser => {
              const url = api + 'addFavoriteMovie';
              return this.http.post(url, {profile: currentUser.profileSelected, movie: movie});
          }));
  }
}
