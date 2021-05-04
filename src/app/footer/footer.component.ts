import { Component, OnInit } from '@angular/core';
import { ReseauxList } from '../common/res-sociaux-service';
import { SocialMedia } from '../models/social.model';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  resSociaux:SocialMedia[]=[]

  dateCopyright: number;

  constructor(private service : ReseauxList, private userService: UtilisateurService) { }

  
 // boolean si le user est connecté (depuis le service)
 isConnected: boolean = this.userService.connectUtils.isConnected;
 
 ngOnInit() {
  this.dateCopyright = new Date().getFullYear()
  this.resSociaux=this.service.initReseaux()

 
 }
 
}
 