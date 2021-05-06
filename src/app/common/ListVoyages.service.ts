import { Injectable } from '@angular/core';
import { Voyage } from './Voyage.model';
import { defaultVoyages } from './voyages-mok';

@Injectable({
  providedIn: 'root',
})
export class ListVoyages {
  // variable searchbar
  public searchbarValue: string = '';
  // variable continent card
  public continentClickValue: string = '';
  // panier utilisateur
  public userCart: Voyage[] = [];
  // liste complete des voyages depuis lme mok
  public _listDeVoyages: Voyage[];
  // voyage qui s'affiche sur la page details
  public currentDetailsVoyage: Voyage;

  constructor() {}

  // definir le voyage details actuel
  public setCurrentDetailsVoyage(voyage: Voyage): void {
    this.currentDetailsVoyage = voyage;
  }

  // récupérer et reinitialiser le tableau de voyages
  public initVoyage(): Voyage[] {
    this._listDeVoyages = defaultVoyages;
    return this._listDeVoyages;
  }

  // filtrer les voyages par continznt
  public getContinent(continent: string): Voyage[] {
    const tableauAm: Voyage[] = [];
    const continentLowC = continent.toLocaleLowerCase();
    this._listDeVoyages.forEach((element) => {
      if (element._continent === continentLowC) {
        tableauAm.push(element);
      }
    });
    return tableauAm;
  }

  // filtrer les voyages par pays
  public getPays(pays: string): Voyage[] {
    const tableauP: Voyage[] = [];
    const paysLowC = pays.toLocaleLowerCase();
    this._listDeVoyages.forEach((element) => {
      if (element._pays === paysLowC) {
        tableauP.push(element);
      }
    });
    return tableauP;
  }

  // filtrer les voyages par ville
  public getVille(ville: string): Voyage[] {
    const tableauV: Voyage[] = [];
    const villeLowC = ville.toLocaleLowerCase();
    this._listDeVoyages.forEach((element) => {
      if (element._name === villeLowC) {
        tableauV.push(element);
      }
    });
    return tableauV;
  }

  // ajouter un voyage au panier
  public addcard(article: Voyage): void {
    if (!this.userCart.includes(article)) {
      this.userCart.push(article);
    }
  }

  // retirer un voyage du panier
  public deleteCard(article: Voyage) {
    this.userCart.splice(this.userCart.indexOf(article), 1);
  }
}
