import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { NavbarComponent, } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CardsComponent } from './cards/cards.component';

import { ModalconnexionComponent } from './modalconnexion/modalconnexion.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TravelDetailViewComponent } from './travel-detail-view/travel-detail-view.component';
import { ContinentListComponent } from './continent-list/continent-list.component';
import { ProfileComponent } from './profile/profile.component';

export const route: Routes = [

{ path: 'home', component: HomeComponent },
{ path: '', component: HomeComponent },
{ path: 'travel-list', component: TravelListComponent },
{ path: 'navbar', component: NavbarComponent },
{ path: 'footer', component: FooterComponent },
{ path: 'contact', component: ContactComponent},
{ path: 'modalconnexion', component: ModalconnexionComponent },
{ path: 'detailsVoyages', component: TravelDetailViewComponent },
{ path: 'continents-list', component: ContinentListComponent },
{ path: 'cards', component: CardsComponent},
{ path: 'profil', component: ProfileComponent },
{path: '404', component: NotfoundComponent},
{path: '**', redirectTo: '/404'},
];



