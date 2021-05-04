import { Injectable } from '@angular/core';
import { Voyage } from './Voyage.model';
import { defaultVoyages } from './voyages-mok';

@Injectable({
  providedIn: 'root',
})
export class ListVoyages {
  constructor() {}

  // variable searchbar
  public searchbarValue: string = '';
  // variable continent card
  public continentClickValue: string = '';

  public userCart: Voyage[] = [];

  public _listDeVoyages: Voyage[];

  public currentDetailsVoyage: Voyage;

  public setCurrentDetailsVoyage(voyage: Voyage) {
    this.currentDetailsVoyage = voyage;
  }

  public initVoyage() {
    this._listDeVoyages = defaultVoyages;
    return this._listDeVoyages;
  }

  public getContinent(continent: string) {
    const tableauAm: Voyage[] = [];
    const continentLowC = continent.toLocaleLowerCase();
    this._listDeVoyages.forEach((element) => {
      if (element._continent === continentLowC) {
        tableauAm.push(element);
      }
    });
    return tableauAm;
  }

  public getPays(pays: string) {
    const tableauP: Voyage[] = [];
    const paysLowC = pays.toLocaleLowerCase();
    this._listDeVoyages.forEach((element) => {
      if (element._pays === paysLowC) {
        tableauP.push(element);
      }
    });
    return tableauP;
  }
  public getVille(ville: string) {
    const tableauV: Voyage[] = [];
    const villeLowC = ville.toLocaleLowerCase();
    this._listDeVoyages.forEach((element) => {
      if (element._name === villeLowC) {
        tableauV.push(element);
      }
    });
    return tableauV;
  }

  public addcard(article: Voyage) {
    this.userCart.push(article);
  }

  public deleteCard(article: Voyage) {
    this.userCart.splice(this.userCart.indexOf(article), 1);
  }
}
