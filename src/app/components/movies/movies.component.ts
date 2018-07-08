import { Component, OnInit } from '@angular/core';
import {GenderService} from '../../services/gender.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public genders: Array<any>;
  public selectedGender: number;
  constructor(private genderService: GenderService) {
    this.selectedGender = 0;
    this.genderService.findAllGenders()
        .subscribe(genders => {
          if (genders) {
            this.genders = genders as Array<any>;
            this.genders.unshift({id: 0, description: 'All'});
          }
        });
  }

  ngOnInit() {
  }

}
