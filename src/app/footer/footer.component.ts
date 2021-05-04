import { Component, OnInit } from '@angular/core';
import { ConnectUtils } from '../common/connectUtils';
import { ReseauxList } from '../common/res-sociaux-service';
import { SocialMedia } from '../models/social.model';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  resSociaux: SocialMedia[] = [];

  dateCopyright: number;

  constructor(
    private service: ReseauxList,
    private userService: UtilisateurService
  ) {}

  // boolean si le user est connecté (depuis le service)
  connectUtils: ConnectUtils;

  ngOnInit() {
    this.dateCopyright = new Date().getFullYear();
    this.resSociaux = this.service.initReseaux();
    this.connectUtils = this.userService.connectUtils;
  }
}
