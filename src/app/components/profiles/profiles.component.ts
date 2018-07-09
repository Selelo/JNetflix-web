import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  public currentUser: any;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.currentUser.profiles = [
        {name: 'julian', user: 1},
        {name: 'daniel', user: 1}
    ];
    console.log(this.currentUser);
  }

  public selectProfile(profile: any) {
      this.currentUser.profileSelected = profile;
      this.authService.setCurrentUser(this.currentUser);
  }

}
