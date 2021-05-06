import { Component, Input } from '@angular/core';
import { ListVoyages } from '../common/ListVoyages.service';
import { Voyage } from '../common/Voyage.model';

@Component({
  selector: 'app-card-travel',
  templateUrl: './card-travel.component.html',
  styleUrls: ['./card-travel.component.css'],
})
export class CardTravelComponent {
  // Voyage à afficher
  @Input() voyage: Voyage;

  constructor(private service: ListVoyages) {}

  // definir le voyage à afficher sur les details
  onVoyageClick(): void {
    this.service.setCurrentDetailsVoyage(this.voyage);
  }
}
