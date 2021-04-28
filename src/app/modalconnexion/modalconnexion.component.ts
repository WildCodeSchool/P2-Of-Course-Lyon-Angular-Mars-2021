import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListVoyages } from '../common/ListVoyages.service';

@Component({
  selector: 'app-modalconnexion',
  templateUrl: './modalconnexion.component.html',
  styleUrls: ['./modalconnexion.component.css']
})
export class ModalconnexionComponent implements OnInit {

  constructor(private service: ListVoyages) { }

  signup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  ngOnInit(): void {
  }

}
