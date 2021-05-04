import { Component } from '@angular/core';
import { Voyage } from './common/Voyage.model';
import { ListVoyages } from './common/ListVoyages.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  title = 'ofcourse';

  ngOnInit() {}
}
