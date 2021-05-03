import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListVoyages } from '../common/services/ListVoyages.service';
import { Voyage } from '../common/models/Voyage.model';

@Component({
  selector: 'app-card-travel',
  templateUrl: './card-travel.component.html',
  styleUrls: ['./card-travel.component.css'],
})
export class CardTravelComponent implements OnInit {
  @Input() voyage: Voyage;

  constructor(private service: ListVoyages) {}

  onVoyageClick() {
    this.service.setCurrentDetailsVoyage(this.voyage);
  }

  ngOnInit(): void {}
}
