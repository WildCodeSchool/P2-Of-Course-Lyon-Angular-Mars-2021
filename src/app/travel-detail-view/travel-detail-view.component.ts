import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectUtils } from '../common/connectUtils';
import { ListVoyages } from '../common/ListVoyages.service';
import { Voyage } from '../common/Voyage.model';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-travel-detail-view',
  templateUrl: './travel-detail-view.component.html',
  styleUrls: ['./travel-detail-view.component.css']
})
export class TravelDetailViewComponent implements OnInit {

  constructor(private service: ListVoyages, private router : Router,
    private userService: UtilisateurService){}

  travel : Voyage = this.service.currentDetailsVoyage;
  connectUtils : ConnectUtils

  // cette fonction permet d'ajouter le produit au click 
  addCarts(){
    this.service.addcard(this.travel)
  
    this.router.navigateByUrl("/travel-list")
  }

  addCartNoConnect(){
    this.service.addcard(this.travel)
    this.userService.cartclick = true
  }

  ngOnInit(): void {
    this.travel = this.service.currentDetailsVoyage
    this.connectUtils = this.userService.connectUtils
  }

}
