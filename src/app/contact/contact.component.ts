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

  public formulaire: FormGroup;
  public bodyOfMessage: string ;
  public mailto:string;
  
  constructor(private fb: FormBuilder) {}
  
 
  ngOnInit(): void {
    

    this.formulaire = this.fb.group({
     name:['',[Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
     prenom:['',[Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
     email:['',[Validators.required, Validators.email, Validators.minLength(13), Validators.maxLength(120)]],
     message:['',[Validators.required,Validators.minLength(5), Validators.maxLength(360) ]],
     tableau:this.fb.array([])
    });
    }

  
  onMessageChange(){
    this.bodyOfMessage = this.formulaire.get('message').value
    this.mailto="mailto:contact@ofcourse.fr?subject=demande d'information&cc=contact@ofcourse.fr&bcc=contact@ofcourse.fr&body=" + this.bodyOfMessage;
  }
}