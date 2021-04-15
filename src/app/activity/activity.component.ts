import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../models/activity.model';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
 @Input() public activity :Activity;
  constructor() { }

  ngOnInit(): void {
  }
showMe: boolean = false;
toogleTag() {
  this.showMe = !this.showMe;
}


}
