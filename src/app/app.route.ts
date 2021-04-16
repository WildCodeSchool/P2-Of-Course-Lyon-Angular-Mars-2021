import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { NavbarComponent, } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


export const route: Routes = [

{ path: 'home', component: HomeComponent },
{ path: '', component: HomeComponent },
{ path: 'travel-list', component: TravelListComponent },
{ path: 'navbar', component: NavbarComponent },
{ path: 'footer', component: FooterComponent },
// { path: 'contact', component: ContactComponent }

];

