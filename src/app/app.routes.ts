import { LinksPageComponent } from './links-page/links-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Routes } from '@angular/router';


export const routes : Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'links', component: LinksPageComponent}
]