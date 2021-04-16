import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from '../models/card.model';
@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {

  cardList: Card[] = []

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
    this.cardList.push(
      new Card ('Venice','assets/venice.jpeg','0034565443', 'An invitation to the "Eternal City" where you can only be amazed at the riches of the Italian capital. A weekend where we reserve you two essential visi...'),
      new Card ('Venice','assets/venice.jpeg','0034565443', 'An invitation to the "Eternal City" where you can only be amazed at the riches of the Italian capital. A weekend where we reserve you two essential visi...'),
      new Card ('Venice','assets/venice.jpeg','0034565443', 'An invitation to the "Eternal City" where you can only be amazed at the riches of the Italian capital. A weekend where we reserve you two essential visi...')
    )
  }

}
