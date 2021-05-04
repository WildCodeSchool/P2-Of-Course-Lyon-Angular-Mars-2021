import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../utilisateur.service';
import { Utilisateur } from '../utilisateur.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {


adress:string = "Bay Area, San Francisco, CA"

  constructor(public service: UtilisateurService) {}


  // réccupérer le user connecté depuis le service
  public infoUser: Utilisateur;

  ngOnInit(): void {
   this.infoUser = this.service.connectUtils.connectedUser;
  }
}
