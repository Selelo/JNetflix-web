import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {api} from '../config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private currentUser: any;
  constructor(public http: HttpClient) {
      if (localStorage.getItem('currentUser') != null) {
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      }
  }

  public login(userLogin: any) {
    const url = api + 'login';
    console.log(userLogin);
    return this.http.post(url, userLogin)
        .pipe(map(userLogged => {
            if (userLogged) {
                this.setCurrentUser(userLogged);
            }
            return userLogged;
        }));
  }

  public logout() {
      const url = api + 'logout';
      return this.http.post(url, {})
          .pipe(map(response => {
              if (response) {
                  this.setCurrentUser(null);
              }
              return response;
          }));
  }

  public getCurrentUser() {
      return this.currentUser;
  }

  public setCurrentUser(user: any) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUser = user;
  }
}
