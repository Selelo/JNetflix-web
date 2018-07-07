import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private url: String;
  constructor(public router: Router) {
      this.router.events
        .subscribe((event: Event) => {
          if (event instanceof NavigationEnd ) {
              console.log(event.url);
              this.url = event.url;
          }
      });
  }

  ngOnInit() {
  }

}
