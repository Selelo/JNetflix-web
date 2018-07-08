import { Injectable } from '@angular/core';
import { api } from '../config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private http: HttpClient) {
  }

    public findAllGenders() {
      const url = api + 'gender';
      return this.http.get(url);
    }
}
