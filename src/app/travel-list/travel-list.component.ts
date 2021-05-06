import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListVoyages } from '../common/services/ListVoyages.service';
import { Voyage } from '../common/models/Voyage.model';
@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css'],
})
export class TravelListComponent implements OnInit {
  constructor(private voyageService: ListVoyages) {}

  // réccup liste des voyages depuis le service
  voyages: Voyage[];

  // variables reactive form
  filtersForm = new FormGroup({
    state: new FormControl(),
    continent: new FormControl(),
    toLoc: new FormControl(),
    fromLoc: new FormControl(),
    travelDates: new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    }),
  });

  // tableaux afin d'afficher l'auto-complétion des inputs
  cityOptions: string[];
  stateOptions: string[];
  contOptions: string[];

  // fonction qui se lance à la validation du formulaire
  onSubmit() {
    // reset la liste des voyages (pour re-effectuer le filter)
    this.voyages = this.voyageService.initVoyage();
    // filtrer selon le champ remplit
    if (this.filtersForm.get('toLoc').value) {
      this.voyages = this.voyages.filter((voyage) =>
        voyage._name.includes(this.filtersForm.get('toLoc').value)
      );
    } else if (this.filtersForm.get('state').value) {
      this.voyages = this.voyages.filter((voyage) =>
        voyage._pays.includes(this.filtersForm.get('state').value)
      );
    } else if (this.filtersForm.get('continent').value) {
      this.voyages = this.voyages.filter((voyage) =>
        voyage._continent.includes(this.filtersForm.get('continent').value)
      );
    }
  }

  // fonction qui sert à modifier le tableau d'auto-complétion selon la valeur du champ
  getChangingOptions(array: string[], value: string): string[] {
    let newTab: string[] = [];
    array.forEach((element) => {
      if (value) {
        if (
          !newTab.includes(element) &&
          element.toLowerCase().startsWith(value.toLowerCase(), 0)
        ) {
          newTab.push(element);
        } else if (!newTab.includes(element) && !value) {
          newTab.push(element);
        }
      }
    });
    return newTab;
  }

  ngOnInit(): void {
    this.voyages = this.voyageService.initVoyage();
    this.cityOptions = this.voyageService
      .initVoyage()
      .map((voyage) => voyage._name);
    this.stateOptions = this.voyageService
      .initVoyage()
      .map((voyage) => voyage._pays);
    this.contOptions = this.voyageService
      .initVoyage()
      .map((voyage) => voyage._continent);
    // filtrer la liste avec la valeur de la searchbar de la nav (si elle n'est pas vide)
    if (this.voyageService.searchbarValue !== '') {
      this.filtersForm.get('toLoc').setValue(this.voyageService.searchbarValue);
      this.onSubmit();
    } else if (this.voyageService.continentClickValue !== '') {
      this.filtersForm
        .get('continent')
        .setValue(this.voyageService.continentClickValue);
      this.onSubmit();
    }
  }
}
