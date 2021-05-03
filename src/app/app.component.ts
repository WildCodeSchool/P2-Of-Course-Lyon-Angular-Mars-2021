import { Component } from '@angular/core';
import { Voyage } from './common/models/Voyage.model';
import { ListVoyages } from './common/services/ListVoyages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private service: ListVoyages) {}
  title = 'ofcourse';

  ngOnInit() {}
}
