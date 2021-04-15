import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {

  @Input() images: any = {
    one: 'https://picsum.photos/id/1037/1920/1080',
    two: 'https://picsum.photos/id/1023/1920/1080',
    three: 'https://picsum.photos/id/1047/1920/1080'
  }
  @Input() title: string = 'America'
  @Input() descs: any = {
    one: 'Go to the United States',
    two: 'Visit beautiful Canada',
    three: 'Travel to Mexico'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
