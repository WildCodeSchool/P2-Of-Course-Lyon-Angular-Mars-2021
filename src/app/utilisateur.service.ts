import { Injectable } from '@angular/core';
import { Utilisateur } from './utilisateur.model';
import { usersList } from './utilisateurs-mok';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  
  public connectedUser: Utilisateur;
  public isUserConnected: boolean = false;
  public users:Utilisateur[] = usersList;

  //cette methode valide la connection 
  public connectUser(email:string, password:string){
  // on va chercher si l'email en parametre est le meme qu'un utilisateur de la liste
    let user: Utilisateur = this.users.filter(x => x.email === email)[0]
  //on verifie si le mot de passe en parametre est le meme que celui de l'utilisateur
    if(user.password === password){
      this.connectedUser=user
      this.isUserConnected=true
    };   
  }
}