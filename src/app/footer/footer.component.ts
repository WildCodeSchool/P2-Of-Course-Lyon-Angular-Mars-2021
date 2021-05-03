import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public service: UtilisateurService) { }
userConnected:boolean = this.service.isUserConnected;
  dateCopyright: number= (new Date()).getFullYear()

 
ngOnInit() {
  
  
}
 openLink(url:string){
  window.open(url)
}

toggoleShowHide = true;
toggole = true;


itemClicked(){
  this.toggoleShowHide = !this.toggoleShowHide;
  
}
phoneClicked(){
  this.toggole = !this.toggole;
  
}

}
