import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-travel-detail-view',
  templateUrl: './travel-detail-view.component.html',
  styleUrls: ['./travel-detail-view.component.css']
})
export class TravelDetailViewComponent implements OnInit {

  //@Input() vogageView : Voyage
  public titleOfTravel: String = "China"
  constructor() { }

  ngOnInit(): void {
  }

}
