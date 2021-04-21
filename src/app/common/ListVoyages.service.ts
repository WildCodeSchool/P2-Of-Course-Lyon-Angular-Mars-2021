import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable } from '@angular/core';
import { Voyage } from './Voyage.service';

@Injectable({
  providedIn:'root'
})
export class ListVoyages {
  
  constructor() {}
  public _listDeVoyages: Voyage[] = [];

  public initVoyage() {
    this._listDeVoyages.push(
      new Voyage(
        'asie',
        'japon',
        'pekin',
        'voyage a pekin',
        '../../assets/img/japon.png'
      ),
      new Voyage(
        'asie',
        'inde',
        'new delhi',
        'voyage a new delhi',
        '../../assets/img/New-Delhi-.jpeg'
      ),
      new Voyage(
        'europe',
        'espagne',
        'madrid',
        'voyage a madrid',
        '../../assets/img/madrid.webp'
      ),
      new Voyage(
        'europe',
        'france',
        'paris',
        'voyage a paris',
        '../../assets/img/paris.jpeg'
      ),
      new Voyage(
        'amerique',
        'etats-unis',
        'miami',
        'voyage a miami',
        '../../assets/img/miami.jpeg'
      ),
      new Voyage(
        'amerique',
        'etats-unis',
        'orlondo',
        'voyage a orlondo',
        '../../assets/img/orlondo.jpeg'
      ),
      new Voyage(
        'amerique',
        'brésil',
        'rio ',
        'voyage a rio',
        '../../assets/img/bresil.jpeg'
      ),
      new Voyage(
        'afrique',
        'egypte',
        'caire',
        'voyage au Caire',
        '../../assets/img/egypte.webp'
      ),
      new Voyage(
        'afrique',
        'maroc',
        'marrakech',
        'voyage a marrakech',
        '../../assets/img/marrakech.jpeg'
      ),
      new Voyage(
        'europe',
        'italie',
        'rome',
        'voyage a rome',
        '../../assets/img/Rome.jpeg'
      )
    );
    return this._listDeVoyages;
  }

  public getContinent(continent :string) {
    const tableauAm: Voyage[] = [];
    const continentLowC = continent.toLocaleLowerCase()
    this._listDeVoyages.forEach((element) => {
      if (element.continent === continentLowC) {
        tableauAm.push(element);
      }
    });
    return tableauAm;
  }

  
  public getPays(pays:string) {
    const tableauP: Voyage[] = [];
    const paysLowC = pays.toLocaleLowerCase();
    this._listDeVoyages.forEach((element) => {
      if (element.pays === paysLowC) {
        tableauP.push(element);
      }
    });
    return tableauP;
  }
  public getVille(ville:string) {
    const tableauV: Voyage[] = [];
    const villeLowC = ville.toLocaleLowerCase();
    this._listDeVoyages.forEach((element) => {
      if (element.name === villeLowC) {
        tableauV.push(element);
      }
    });
    return tableauV;
  }
}
