import { Component, Input, OnInit } from '@angular/core';
import { ListVoyages } from '../common/ListVoyages.service';
import { Voyage } from '../common/Voyage.service';




@Component({
  selector: 'app-travel-detail-view',
  templateUrl: './travel-detail-view.component.html',
  styleUrls: ['./travel-detail-view.component.css']
})
export class TravelDetailViewComponent implements OnInit {

  @Input() vogageView : Voyage
 
public service: ListVoyages;
public voyage : Voyage[]=[];
constructor( listVoyage: ListVoyages ){
  this.service = listVoyage
  
}
  ngOnInit(): void {
  
 this.voyage = this.service.initVoyage();
  //console.log(this.voyage);
 }

}
