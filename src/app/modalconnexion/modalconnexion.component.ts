import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from '../common/services/utilisateur.service';

@Component({
  selector: 'app-modalconnexion',
  templateUrl: './modalconnexion.component.html',
  styleUrls: ['./modalconnexion.component.css'],
})
export class ModalconnexionComponent implements OnInit {
  constructor(private service: UtilisateurService, private router: Router) {}

  signup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  isUserConnected: boolean;

  onSubmit() {
    this.service.connectUser(
      this.signup.value['email'],
      this.signup.value['password']
    );
    this.isUserConnected = this.service.connectUtils.isConnected;
    if (this.isUserConnected === true) {
      this.router.navigateByUrl('/profil');
    }
  }

  ngOnInit(): void {
    this.isUserConnected = this.service.connectUtils.isConnected;
  }
}
