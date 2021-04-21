import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { NavbarComponent, } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { route } from './app.route';
import { RouterModule } from '@angular/router';

import { CategoryCardComponent } from './category-card/category-card.component';
import { ModalconnexionComponent } from './modalconnexion/modalconnexion.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TravelListComponent,
    NavbarComponent,
    FooterComponent,
    CategoryCardComponent,
    ModalconnexionComponent
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    RouterModule.forRoot(route),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
