import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectUtils } from '../common/connectUtils';
import { ListVoyages } from '../common/ListVoyages.service';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private service: UtilisateurService,
    private travelService: ListVoyages,
    private route: Router
  ) {}

  Logo = {
    nuageUn: '../assets/nuage1.png',
    nuage: '../assets/nuage.png',
    avion: '../assets/avion.png',
    carts: '../assets/cards.png',
  };

  search: string = '';
  isMenuOpen: boolean = false;

  // boolean si le user est connecté (depuis le service)
  connectUtils: ConnectUtils;

  onSearch() {
    // on définit la valeur de la recherche dans le service
    this.travelService.searchbarValue = this.search;
    // on redirige l'utilisateur vers la route /list
    this.route.navigate(['/travel-list']);
  }

  //menu deroulant
  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {
    this.connectUtils = this.service.connectUtils;
  }
}
