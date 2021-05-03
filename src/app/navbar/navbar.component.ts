import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListVoyages } from '../common/ListVoyages.service';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  Logo = {
    nuageUn: '../assets/nuage1.png',
    nuage: '../assets/nuage.png',
    avion: '../assets/avion.png',
    carts: '../assets/cards.png',
  };

  search: string = '';

  constructor(
    private service: UtilisateurService,
    private travelService: ListVoyages,
    private route: Router
  ) {}

  // boolean si le user est connecté (depuis le service)
  isConnected: boolean = this.service.connectUtils.isConnected;

  onSearch() {
    // on définit la valeur de la recherche dans le service
    this.travelService.searchbarValue = this.search;
    // on redirige l'utilisateur vers la route /list
    this.route.navigate(['/travel-list']);
  }

  ngOnInit(): void {}
}
