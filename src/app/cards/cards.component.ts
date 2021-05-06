import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListVoyages } from '../common/services/ListVoyages.service';
import { Voyage } from '../common/models/Voyage.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  // tableau de voyage dans le panier
  userCarts: Voyage[];

  constructor(private service: ListVoyages, private router: Router) {}

  // suprimmer du panier
  deleteCarts(carts: Voyage): void {
    this.service.deleteCard(carts);
  }

  // afficher les details lors d'un click sur un voyage
  clickCard(travel: Voyage): void {
    this.service.currentDetailsVoyage = travel;
    this.router.navigateByUrl('/detailsVoyages');
  }

  ngOnInit(): void {
    // tableau de voyage dans le panier (service)
    this.userCarts = this.service.userCart;
  }
}
