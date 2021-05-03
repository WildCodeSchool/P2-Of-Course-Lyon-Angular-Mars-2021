import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model: Order = new Order();
  submitted = false; 
  constructor() { }

  ngOnInit(): void {
    
  }
  onSubmit() {
    // form submitted
    console.log(this.model);
  }
 }
  
export class Order {
  email: string;
  message: string;
  nom:string;
  prenom: string;
}