import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../utilisateur.service';
import { Utilisateur } from '../utilisateur.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  // réccupérer le user connecté depuis le service
  public infoUser: Utilisateur;

  constructor(public service: UtilisateurService) {}

  ngOnInit(): void {
    this.infoUser = this.service.connectUtils.connectedUser;
  }
}
