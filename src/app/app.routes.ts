import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { LinksPageComponent } from './links-page/links-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Routes } from '@angular/router';


export const routes : Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'favorites', component: FavoritesPageComponent },
    { path: 'links', component: LinksPageComponent}
]