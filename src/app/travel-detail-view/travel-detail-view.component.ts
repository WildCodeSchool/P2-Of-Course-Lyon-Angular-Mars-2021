import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectUtils } from '../common/connectUtils';
import { ListVoyages } from '../common/ListVoyages.service';
import { Voyage } from '../common/Voyage.model';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-travel-detail-view',
  templateUrl: './travel-detail-view.component.html',
  styleUrls: ['./travel-detail-view.component.css'],
})
export class TravelDetailViewComponent implements OnInit {
  travel: Voyage = this.service.currentDetailsVoyage;
  connectUtils: ConnectUtils;

  constructor(
    private service: ListVoyages,
    private router: Router,
    private userService: UtilisateurService
  ) {}

  // cette fonction permet d'ajouter le produit au click
  addCarts(): void {
    this.service.addcard(this.travel);

    this.router.navigateByUrl('/travel-list');
  }

  // cette fonction redirige l'utilisateur vers la connexion lors de l'ajout au panier
  addCartNoConnect(): void {
    this.service.addcard(this.travel);
    this.userService.cartclick = true;
  }

  ngOnInit(): void {
    this.travel = this.service.currentDetailsVoyage;
    this.connectUtils = this.userService.connectUtils;
  }
}
