import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListVoyages } from '../common/ListVoyages.service';
import { ContinentCard } from '../common/models/continent.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
})
export class CategoryCardComponent implements OnInit {
  @Input() card: ContinentCard;

  constructor(private service: ListVoyages, private router: Router) {}

  goToList() {
    this.service.continentClickValue = this.card.title.toLowerCase();
    this.router.navigate(['/travel-list']);
  }

  ngOnInit(): void {}
}
