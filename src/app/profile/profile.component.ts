import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../common/services/utilisateur.service';
import { Utilisateur } from '../common/models/utilisateur.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(public service: UtilisateurService) {}

  public infoUser: Utilisateur = this.service.connectUtils.connectedUser;

  ngOnInit(): void {}
}
