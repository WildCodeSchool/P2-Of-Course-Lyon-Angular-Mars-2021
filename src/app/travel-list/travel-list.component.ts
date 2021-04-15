import { Component, OnInit } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {

  flightRound: boolean = false;
  simpleFlightDate: DateRange<Date> = new DateRange<Date>(new Date, new Date)

  onSubmit(){
    console.log(this.simpleFlightDate)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
