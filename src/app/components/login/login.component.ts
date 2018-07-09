import { Component, OnInit } from '@angular/core';
import {isEmpty} from 'rxjs/operators';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any;
  constructor(public authService: AuthService, public router: Router) {
    this.user = {
      email: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  public login() {
    if (this.validateUser()) {
      console.log('usuario validado', this.user);
      this.authService.login(this.user)
          .subscribe(userLogged => {
            console.log(userLogged);
            if (userLogged) {
              console.log('existe el usuario');
              this.router.navigate(['/profiles']);
            }
          });
    } else {
      alert('Por favor ingrese todos los campos');
    }
  }

  private validateUser() {
    return this.user.email != '' || this.user.password != '';
  }

}
