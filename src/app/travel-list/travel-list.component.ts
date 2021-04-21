import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListVoyages } from '../common/ListVoyages.service';
import { Voyage } from '../common/Voyage.service';
@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {

  voyages: Voyage[] = this.voyageService.initVoyage()

  filtersForm = new FormGroup({
    fromLoc: new FormControl(),
    toLoc: new FormControl(),
    state: new FormControl(),
    continent: new FormControl(),
    travelDates: new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    }),
  })

  // TODO: VERIFIER LES INPUTS ENTRE EUX (france est uniquement en europe ou avec paris)
  cityOptions: string[] = this.voyageService.initVoyage().map((x) => x.name)
  stateOptions: string[] = this.voyageService.initVoyage().map((x) => x.pays)
  contOptions: string[] = this.voyageService.initVoyage().map((x) => x.continent)
  
  onSubmit(){
    console.log(this.filtersForm.value)
  }

  filterSingleAutoCompleteResult(array: string[], value: string): string[]{
    let newTab: string[] = []
    // parcourir tout les voyages
    array.forEach(element => {
      // vérifier si value est dans le nouveau tableau
      if(!newTab.includes(element) && element.indexOf(value) === 0){
        // si non, l'ajouter
        newTab.push(element)
      }
    });
    return newTab
  }

  filterAutoComplete(array: string[], value: string): string[]{
    let newTab: string[] = [];
    array.forEach(element => {
      if(element.includes(value)){
        newTab.push(element)
      }
    });
    return newTab
  }

  constructor(private voyageService: ListVoyages) { 
    
   }

  ngOnInit(): void {
    
  }
  

}
