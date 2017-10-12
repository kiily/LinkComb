import { LinksService } from './services/links.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HexagonGridComponent } from './hexagon-grid/hexagon-grid.component';
import { HexagonComponent } from './hexagon/hexagon.component';
import { AddLinkFormComponent } from './add-link-form/add-link-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HexagonGridComponent,
    HexagonComponent,
    AddLinkFormComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule
  ],
  providers: [
    LinksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
