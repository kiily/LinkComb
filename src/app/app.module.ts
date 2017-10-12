import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HexagonGridComponent } from './hexagon-grid/hexagon-grid.component';
import { HexagonComponent } from './hexagon/hexagon.component';

@NgModule({
  declarations: [
    AppComponent,
    HexagonGridComponent,
    HexagonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
