import { Component, OnInit } from '@angular/core';
import { UtilisateurService} from '../utilisateur.service';
import { usersList } from '../utilisateurs-mok';
import { Utilisateur } from "../utilisateur.model"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



  constructor(public service:UtilisateurService) { }

  public infoUser :Utilisateur= this.service.connectedUser

  ngOnInit(): void {
  }

}
