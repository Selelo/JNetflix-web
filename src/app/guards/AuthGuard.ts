import { Injectable }     from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public authService: AuthService, public router: Router){}
    canActivate() {
        return this.authService.getCurrentUser()
            .pipe(map(currentUser => {
                if (currentUser) {
                    return true;
                } else {
                    this.router.navigate(['/login']);
                }
            }),
            catchError((err) => {
                this.router.navigate(['/login']);
                return of(false);
            }));
    }
}