import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public url: string;
  public currentUser: any;
  constructor(public router: Router, public authService: AuthService) {
      this.router.events
        .subscribe((event: Event) => {
          if (event instanceof NavigationEnd ) {
              console.log(event.url);
              this.url = event.url;
          }
      });
  }

  ngOnInit() {
      this.currentUser = this.authService.getCurrentUser();
      console.log("CURRENTUSER: ", this.currentUser);
  }

  public logout() {
    this.authService.logout()
      .subscribe(response => {
        if (response) {
            this.router.navigate(['/login']);
        }
      });
  }

}
