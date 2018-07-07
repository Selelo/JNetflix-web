import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
}
