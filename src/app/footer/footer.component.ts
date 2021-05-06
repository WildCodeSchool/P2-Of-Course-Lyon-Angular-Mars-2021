import { Component, OnInit } from '@angular/core';
import { ConnectUtils } from '../common/connectUtils';
import { ReseauxList } from '../common/res-sociaux-service';
import { SocialMedia } from '../common/social.model';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  // tableau des réseaux sociaux
  resSociaux: SocialMedia[] = [];

  // récupérer la date actuelle
  dateCopyright: number;

  // boolean si le user est connecté (depuis le service)
  connectUtils: ConnectUtils;

  constructor(
    private service: ReseauxList,
    private userService: UtilisateurService
  ) {}

  ngOnInit() {
    // récupérer la date actuelle (année)
    this.dateCopyright = new Date().getFullYear();
    // initialiser le tableau des réseaux sociaux
    this.resSociaux = this.service.initReseaux();
    // // boolean si le user est connecté (depuis le service)
    this.connectUtils = this.userService.connectUtils;
  }
}
