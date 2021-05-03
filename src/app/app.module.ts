import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardTravelComponent } from './card-travel/card-travel.component';

import { HomeComponent } from './home/home.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { CategoryCardComponent } from './category-card/category-card.component';
import { ContactComponent } from './contact/contact.component';
import { ModalconnexionComponent } from './modalconnexion/modalconnexion.component';

import { route } from './app.route';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDatepickerModule,
  MatDateRangeInput,
  MatDateRangePicker,
} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TravelDetailViewComponent } from './travel-detail-view/travel-detail-view.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContinentListComponent } from './continent-list/continent-list.component';
import { MinistringPipe } from './common/ministring.pipe';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTravelComponent,
    HomeComponent,
    TravelListComponent,
    NavbarComponent,
    FooterComponent,
    CategoryCardComponent,
    TravelDetailViewComponent,
    MinistringPipe,

    ContactComponent,
    ModalconnexionComponent,
    NotfoundComponent,
    ContinentListComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatDateRangeInput, MatDateRangePicker],
})
export class AppModule {}
