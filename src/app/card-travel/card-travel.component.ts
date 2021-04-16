import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { Activity } from '../models/activity.model';

@Component({
  selector: 'app-card-travel',
  templateUrl: './card-travel.component.html',
  styleUrls: ['./card-travel.component.css']
})
export class CardTravelComponent implements OnInit {

public card:Card;

//@Input()
  constructor() { }

  ngOnInit(): void {
    this.card = new Card ('Venice','assets/venice.jpeg','0034565443', 'An invitation to the "Eternal City" where you can only be amazed at the riches of the Italian capital. A weekend where we reserve you two essential visits "Discovering Rome where called the Monumental Rome" and "The Vatican Museums and the Sistine Chapel" accompanied by one of our guides with a departure from your hotel. The rest of the time will be free, where you will walk in complete freedom to soak up the architectural wonders and atmospheres of the city. For shopping enthusiasts, there are many fashion boutiques, famous brands and designers in Rome.');
    this.card.addActivity( new Activity('Restaurant', ' Alle Corone - Calle Seconda de la Fava, 5527, 30122 Venezia VE, Italie','https://www.ristoranteallecorone.com/', '+39 041 523 2222'));
    this.card.addActivity( new Activity ('Glass Factory','New Arte Fuga- Fondamenta Navagero Andrea, 75, 30141 Murano, Venezia VE,Italie','http://www.ferrolazzarini.it/', '+39 041 739299'));
  
}
}