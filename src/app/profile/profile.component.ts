import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../utilisateur.service';
import { Utilisateur } from '../utilisateur.model';
import { ConnectUtils } from '../common/connectUtils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(public service: UtilisateurService, private router: Router) {}

  // réccupérer le user connecté depuis le service
  public infoUser: Utilisateur = this.service.connectUtils.connectedUser;

  ngOnInit(): void {}
}
