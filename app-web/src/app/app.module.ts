import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsbComponent } from './cardsb/cardsb.component';
import { CarrouselbComponent } from './carrouselb/carrouselb.component';
import { PagebolComponent } from './pagebol/pagebol.component';

import { RouterModule } from '@angular/router';
import { LugaresbComponent } from './lugaresb/lugaresb.component';
import { Pagecol1Component } from './pagecol1/pagecol1.component';
import { Carrouselc1Component } from './carrouselc1/carrouselc1.component';
import { Cardsc1Component } from './cardsc1/cardsc1.component';
import { FooterComponent } from './footer/footer.component';
// import { FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsbComponent,
    CarrouselbComponent,
    PagebolComponent,
    LugaresbComponent,
    Pagecol1Component,
    Carrouselc1Component,
    Cardsc1Component,
    FooterComponent,

    // FormsModule,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot([
      {path: 'pagebol', component: PagebolComponent},
      // {path: 'pagecol1', component: Pagecol1Component},
      // {path: 'pagecol2', component: Pagecol2Component},
      {path: 'pagecol1', component: Pagecol1Component},
      {path: '', redirectTo: '', pathMatch: 'full'},
      // {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
