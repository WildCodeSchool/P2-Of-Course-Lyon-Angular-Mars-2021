import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListVoyages } from '../common/ListVoyages.service';
import { Voyage } from '../common/Voyage.model';
@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {


  voyages: Voyage[] = this.voyageService.initVoyage()

  filtersForm = new FormGroup({
    state: new FormControl(),
    travelDates: new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    }),
  })

  // TODO: VERIFIER LES INPUTS ENTRE EUX (france est uniquement en europe ou avec paris)
  cityOptions: string[] = this.voyageService.initVoyage().map((x) => x._name)
  stateOptions: string[] = this.voyageService.initVoyage().map((x) => x._pays)
  contOptions: string[] = this.voyageService.initVoyage().map((x) => x._continent)
  
  onSubmit(){
    this.voyages = this.voyageService.initVoyage()
    if(this.filtersForm.get('toLoc').value){
      this.voyages = this.voyages.filter((x) => x._name.includes(this.filtersForm.get('toLoc').value))
    }else if(this.filtersForm.get('state').value){
      this.voyages = this.voyages.filter((x) => x._pays.includes(this.filtersForm.get('state').value))
    }else if(this.filtersForm.get('continent').value){
      this.voyages = this.voyages.filter((x) => x._continent.includes(this.filtersForm.get('continent').value))
    }
  }

  getChangingOptions(array: string[], value: string): string[]{
    let newTab: string[] = []
    array.forEach(element => {
      if(value){
        if(!newTab.includes(element) && element.toLowerCase().startsWith(value.toLowerCase(), 0)){
          newTab.push(element)
        }else if(!newTab.includes(element) && !value){
          newTab.push(element)
        }
      }
    });
    return newTab;
  }

  constructor(private voyageService: ListVoyages) { 
    
   }

  ngOnInit(): void {
  }
  

}
