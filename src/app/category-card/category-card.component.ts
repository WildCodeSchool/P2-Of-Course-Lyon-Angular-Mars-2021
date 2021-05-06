import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ListVoyages } from '../common/ListVoyages.service';
import { ContinentCard } from '../common/models/continent.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
})
export class CategoryCardComponent {
  // récupérer l'objet du continent à afficher
  @Input() card: ContinentCard;

  constructor(private service: ListVoyages, private router: Router) {}

  // redirige vers la liste en définisant la valeur du nom de ce contiennt
  goToList(): void {
    this.service.continentClickValue = this.card.title.toLowerCase();
    this.router.navigate(['/travel-list']);
  }
}
