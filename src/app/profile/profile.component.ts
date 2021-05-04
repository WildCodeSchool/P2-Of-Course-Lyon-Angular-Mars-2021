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

  adress: string = 'Bay Area, San Francisco, CA';

  // réccupérer le user connecté depuis le service
  public infoUser: Utilisateur;

  ngOnInit(): void {
    this.infoUser = this.service.connectUtils.connectedUser;
  }
}
