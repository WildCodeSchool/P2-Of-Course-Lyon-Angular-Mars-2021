import { Injectable } from '@angular/core';
import { Utilisateur } from './utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

private utilisateur:Utilisateur[] = []



  constructor() { }
}
