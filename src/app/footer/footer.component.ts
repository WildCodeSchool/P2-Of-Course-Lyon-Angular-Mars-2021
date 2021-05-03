import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private service: UtilisateurService) {}

  // réccupérer la date d'aujourd'hui
  dateCopyright: number = new Date().getFullYear();

  ngOnInit() {}
  openLink(url: string) {
    window.open(url);
  }

  toggoleShowHide = true;
  toggole = true;
  // boolean si le user est connecté (depuis le service)
  isConnected: boolean = this.service.connectUtils.isConnected;

  itemClicked() {
    this.toggoleShowHide = !this.toggoleShowHide;
  }
  phoneClicked() {
    this.toggole = !this.toggole;
  }
}
