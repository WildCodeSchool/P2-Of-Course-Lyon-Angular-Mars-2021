import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListVoyages } from '../common/ListVoyages.service';
import { Voyage } from '../common/Voyage.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  constructor(private service: ListVoyages, private router: Router) {}

  userCarts: Voyage[];
  deleteCarts(carts: Voyage) {
    this.service.deleteCard(carts);
  }
  clickCard(travel: Voyage) {
    this.service.currentDetailsVoyage = travel;
    this.router.navigateByUrl('/detailsVoyages');
  }

  ngOnInit(): void {
    this.userCarts = this.service.userCart;
  }
}
