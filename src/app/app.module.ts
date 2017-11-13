import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { LinksService } from './services/links.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HexagonGridComponent } from './components/hexagon-grid/hexagon-grid.component';
import { HexagonComponent } from './components/hexagon/hexagon.component';
import { AddLinkFormComponent } from './components/add-link-form/add-link-form.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LinksPageComponent } from './pages/links-page/links-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AddLinkAccordionComponent } from './components/add-link-accordion/add-link-accordion.component';
import { UpdateLinkFormComponent } from './components/update-link-form/update-link-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HexagonGridComponent,
    HexagonComponent,
    AddLinkFormComponent,
    LandingPageComponent,
    LinksPageComponent,
    NavbarComponent,
    FavoritesPageComponent,
    AddLinkAccordionComponent,
    UpdateLinkFormComponent,
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    //enable offline persistence of data
    // AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LinksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
