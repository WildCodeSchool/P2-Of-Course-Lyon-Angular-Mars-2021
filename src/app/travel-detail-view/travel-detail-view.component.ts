import { Component, OnInit } from '@angular/core';
import { ListVoyages } from '../common/services/ListVoyages.service';
import { Voyage } from '../common/models/Voyage.model';

@Component({
  selector: 'app-travel-detail-view',
  templateUrl: './travel-detail-view.component.html',
  styleUrls: ['./travel-detail-view.component.css'],
})
export class TravelDetailViewComponent implements OnInit {
  constructor(private service: ListVoyages) {}

  travel: Voyage = this.service.currentDetailsVoyage;

  ngOnInit(): void {}
}
