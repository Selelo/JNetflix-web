import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { api } from '../config';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(public http: HttpClient, public authService: AuthService) { }

  public findAllMovies() {
    const url = api + '/movie';
    return this.http.get(url);
  }

  public findMoviesByGender(gender: number) {
    const url = api + 'movieByGender';
    const params = new HttpParams()
      .append('gender', gender.toString(10));
    return this.http.get(url, {params});
  }

  public findMyList() {
      const currentUser = this.authService.getCurrentUser();
      const url = api + 'movieByProfile';
      const profileId = currentUser.profileSelected
        && currentUser.profileSelected.id
        ? currentUser.profileSelected.id
        : 0;
      const params = new HttpParams()
          .append('profile', profileId);
      return this.http.get(url, {params});
  }
}
