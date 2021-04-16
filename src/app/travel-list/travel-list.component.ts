import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {

  // ERREUR AU CHARGEMENT DU FORMULAIRE

  flightRound: boolean = false;
  
  filtersForm = new FormGroup({
    travelLocations: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    travelDates: new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    }),
    singleFlightDate: new FormControl(),
    doubleFlightDates: new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    })
  })

  onSubmit(){
    console.log(this.filtersForm.value)
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
