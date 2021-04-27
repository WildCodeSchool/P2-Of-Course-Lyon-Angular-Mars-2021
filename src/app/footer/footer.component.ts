import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
