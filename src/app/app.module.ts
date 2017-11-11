import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { LinksService } from './services/links.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HexagonGridComponent } from './hexagon-grid/hexagon-grid.component';
import { HexagonComponent } from './hexagon/hexagon.component';
import { AddLinkFormComponent } from './add-link-form/add-link-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LinksPageComponent } from './links-page/links-page.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HexagonGridComponent,
    HexagonComponent,
    AddLinkFormComponent,
    LandingPageComponent,
    LinksPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LinksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
