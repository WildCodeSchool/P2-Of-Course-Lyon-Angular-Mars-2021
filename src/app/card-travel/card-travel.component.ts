import { Component, Input, OnInit } from '@angular/core';
import { Voyage } from '../common/Voyage.service';

@Component({
  selector: 'app-card-travel',
  templateUrl: './card-travel.component.html',
  styleUrls: ['./card-travel.component.css']
})
export class CardTravelComponent implements OnInit {

  @Input()
  public voyage: Voyage;

  constructor() { }

  ngOnInit(): void {

  }
}