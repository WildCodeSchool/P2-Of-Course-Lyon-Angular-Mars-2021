import { Injectable } from '@angular/core';
import { ConnectUtils } from './common/connectUtils';
import { Utilisateur } from './utilisateur.model';
import { usersList } from './utilisateurs-mok';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  public connectUtils: ConnectUtils = new ConnectUtils();
  public users: Utilisateur[] = usersList;
  public cartclick: boolean = false;
  //cette methode valide la connection
  public connectUser(email: string, password: string) {
    // on va chercher si l'email en parametre est le meme qu'un utilisateur de la liste
    let user: Utilisateur = this.users.filter(
      (user) => user.email === email
    )[0];
    //on verifie si le mot de passe en parametre est le meme que celui de l'utilisateur
    if (user.password === password) {
      this.connectUtils.connectedUser = user;
      this.connectUtils.isConnected = true;
    } else {
      return true;
    }
  }
}
