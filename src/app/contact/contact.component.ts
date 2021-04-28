import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {


 
  public mailto:string=""
  constructor(private fb: FormBuilder) {}
  public formulaire: FormGroup;
  public bodyOfMessage: string = "";
  ngOnInit(): void {

    this.formulaire = this.fb.group({
     name:['',[Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
     prenom:['',[Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
     email:['',[Validators.required, Validators.email, Validators.minLength(13), Validators.maxLength(120)]],
     message:['',[Validators.required,Validators.minLength(5), Validators.maxLength(360) ]],
     tableau:this.fb.array([])
    });
    }

  onSubmit() {
    // Get form value as JSON object
    this.bodyOfMessage = this.formulaire.get('message').value
    console.log(this.bodyOfMessage)
    this.mailto="mailto:mohamedboussaid69700@hotmail.fr?subject=demande d'information&cc=partenaire@hotmail.fr&bcc=avocat@hotmail.fr&body=" + this.bodyOfMessage;
    console.log(this.formulaire)
    console.log(this.mailto)
    console.log(this.bodyOfMessage)
  }
}