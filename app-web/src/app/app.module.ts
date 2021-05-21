import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsbComponent } from './cardsb/cardsb.component';
import { CarrouselbComponent } from './carrouselb/carrouselb.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsbComponent,
    CarrouselbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
