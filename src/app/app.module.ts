import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CardTravelComponent } from './card-travel/card-travel.component';
import { ActivityComponent } from './activity/activity.component';
import { FormsModule } from '@angular/forms';
=======
import { HomeComponent } from './home/home.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { NavbarComponent, } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { route } from './app.route';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatDateRangeInput, MatDateRangePicker } from '@angular/material/datepicker'
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
>>>>>>> 871eb84eb89e9ebe4959ad2c0c37e481a1d6256e

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CardTravelComponent,
    ActivityComponent
=======
    HomeComponent,
    TravelListComponent,
    NavbarComponent,
    FooterComponent,
    CategoryCardComponent,
    
>>>>>>> 871eb84eb89e9ebe4959ad2c0c37e481a1d6256e
  ],
  imports: [
    FormsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatDateRangeInput, MatDateRangePicker]
})
export class AppModule { }
