import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Voyage } from '../common/Voyage.model';

@Component({
  selector: 'app-card-travel',
  templateUrl: './card-travel.component.html',
  styleUrls: ['./card-travel.component.css']
})
export class CardTravelComponent implements OnInit {

  @Input() voyage: Voyage;
  @Output() getVoyage: EventEmitter<Voyage> = new EventEmitter()

  constructor() { }

  onVoyageClick(){
    this.getVoyage.emit(this.voyage)
  }

  ngOnInit(): void {

  }
}