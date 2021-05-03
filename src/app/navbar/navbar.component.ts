import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  Logo = {
    nuageUn : "../assets/nuage1.png",
    nuage : "../assets/nuage.png",
    avion : "../assets/avion.png",
    carts : "../assets/cards.png",
  }

  constructor(private service: UtilisateurService) {}

  // boolean si le user est connecté (depuis le service)
  isConnected: boolean = this.service.connectUtils.isConnected;

  ngOnInit(): void {}
}
