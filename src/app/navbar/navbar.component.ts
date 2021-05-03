import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../common/services/utilisateur.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private service: UtilisateurService) {}
  userConnected: boolean = this.service.connectUtils.isConnected;

  Logo = {
    nuageUn: '../assets/nuage1.png',
    nuage: '../assets/nuage.png',
    avion: '../assets/avion.png',
  };

  ngOnInit(): void {}
}
