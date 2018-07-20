import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: any;
  constructor(public authService: AuthService, public router: Router) {
    this.user = {
      email: '',
      password: '',
      birthdate: ''
    }
  }

  ngOnInit() {
  }

  public register() {
      if (this.validateUser()) {
          console.log('usuario validado', this.user);
          this.authService.register(this.user)
              .subscribe((userLogged: any) => {
                  console.log(userLogged);
                  if (userLogged && !userLogged.error) {
                      //console.log('existe el usuario');
                      this.router.navigate(['/login']);
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
