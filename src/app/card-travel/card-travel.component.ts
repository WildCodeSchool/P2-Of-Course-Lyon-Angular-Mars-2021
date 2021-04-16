import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { Activity } from '../models/activity.model';

@Component({
  selector: 'app-card-travel',
  templateUrl: './card-travel.component.html',
  styleUrls: ['./card-travel.component.css']
})
export class CardTravelComponent implements OnInit {

  @Input() public card:Card;

  constructor() { }

  ngOnInit(): void {
    
  }
}