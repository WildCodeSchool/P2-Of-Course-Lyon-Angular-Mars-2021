import { Component, OnInit } from '@angular/core';
import { carouselUrl } from '../common/models/carousel-mok';
import { Developer } from '../common/models/developer.model';
import { teamOfCourse } from '../common/models/team-mok';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
 public image:string[]= carouselUrl; 
 public team: Developer[] = teamOfCourse;

  constructor() {}

  ngOnInit(): void {
    this.image= carouselUrl;
    this.team= teamOfCourse;
  }
}
