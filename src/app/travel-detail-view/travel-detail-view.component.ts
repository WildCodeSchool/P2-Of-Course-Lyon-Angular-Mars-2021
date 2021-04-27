import { Component, Input, OnInit } from '@angular/core';
import { Voyage } from '../common/Voyage.model';

@Component({
  selector: 'app-travel-detail-view',
  templateUrl: './travel-detail-view.component.html',
  styleUrls: ['./travel-detail-view.component.css']
})
export class TravelDetailViewComponent implements OnInit {

  @Input() travel : Voyage;

  getVoyageValue($event: Voyage){
    this.travel = $event
  }

  ngOnInit(): void {
  }

}
