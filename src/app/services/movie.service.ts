import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { api } from '../config';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(public http: HttpClient) { }

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
}
