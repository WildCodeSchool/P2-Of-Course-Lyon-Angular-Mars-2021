import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from '../utilisateur.service';

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

  isUserConnected: boolean = this.service.connectUtils.isConnected;

  onSubmit() {
    this.service.connectUser(
      this.signup.value['email'],
      this.signup.value['password']
    );
    this.isUserConnected = this.service.connectUtils.isConnected;
    if (this.isUserConnected === true) {
      this.router.navigateByUrl('/profil');
    }
    if(this.service.cartclick){
      this.router.navigateByUrl('/cards');
    }
  }

  ngOnInit(): void {}
}
