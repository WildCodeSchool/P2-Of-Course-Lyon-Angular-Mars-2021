import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  Logo = {
    nuageUn : "../assets/nuage1.png",
    nuage : "../assets/nuage.png",
    avion : "../assets/avion.png",

  }


  constructor() { }


  
  ngOnInit(): void {
  }

}
