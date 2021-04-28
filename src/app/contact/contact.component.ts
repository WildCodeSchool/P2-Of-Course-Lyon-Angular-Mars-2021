import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  //model: Order = new Order();

 
  public messages:string=""
  constructor(private fb: FormBuilder) {}
  public formulaire: FormGroup;
  

  ngOnInit(): void {
    
    this.formulaire = this.fb.group({
     name:['',[Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
     prenom:['',[Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
     email:['',[Validators.required, Validators.email, Validators.minLength(13), Validators.maxLength(120)]],
     message:['',[Validators.required,Validators.minLength(5), Validators.maxLength(360) ]]
    });
    console.log(this.formulaire)
    this.messages=`mailto:mohamedboussaid69700@hotmail.fr
    ?subject=demande d'information&cc=partenaire@hotmail.fr&bcc=avocat@hotmail.fr&body=${this.formulaire.get('message').value}`
  }



  onSubmit() {
    // Get form value as JSON object
    console.log('oderForm submitted : ', this.formulaire.value);
  }
}
/*export class Order {
  email: string;
  message: string;
  nom:string;
  prenom: string;
}*/
