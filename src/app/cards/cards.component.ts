import { Component, OnInit } from '@angular/core';
import { ListVoyages } from '../common/ListVoyages.service';
import { Voyage } from '../common/Voyage.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  
  constructor(private service: ListVoyages ) {}

  userCarts : Voyage[];  
  deleteCarts(carts : Voyage){
    this.service.deleteCard(carts)
  }

  ngOnInit(): void {

    this.userCarts = this.service.userCart

  }

}
