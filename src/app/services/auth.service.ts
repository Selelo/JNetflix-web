import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {api} from '../config';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private currentUser: any;
    private currentUserObservable: BehaviorSubject<any>;
  constructor(public http: HttpClient) {
      if (localStorage.getItem('currentUser') != null) {
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      }
      this.currentUserObservable = new BehaviorSubject(this.currentUser);
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

  public getCurrentUser(): Observable<any> {
      return this.currentUserObservable;
  }

  public setCurrentUser(user: any): void {
      localStorage.setItem('currentUser', JSON.stringify(user));
      //this.currentUser = user;
      this.currentUserObservable.next(user);
  }
}
