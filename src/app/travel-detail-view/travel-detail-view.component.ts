import { Component, Input, OnInit } from '@angular/core';
import { ListVoyages } from '../common/ListVoyages.service';
import { Voyage } from '../common/Voyage.service';


@Component({
  selector: 'app-travel-detail-view',
  templateUrl: './travel-detail-view.component.html',
  styleUrls: ['./travel-detail-view.component.css']
})
export class TravelDetailViewComponent implements OnInit {

  //@Input() vogageView : Voyage
 
 // constructor(private service: ListVoyages) { }
//public voyage : Voyage []=[]
  ngOnInit(): void {
  
  //this.voyage = this.service.getVille('New Delhi');
 }

}
