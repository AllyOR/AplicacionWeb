import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsbComponent } from './cardsb/cardsb.component';
import { CarrouselbComponent } from './carrouselb/carrouselb.component';
import { PagebolComponent } from './pagebol/pagebol.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsbComponent,
    CarrouselbComponent,
    PagebolComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot([
      {path: 'pagebol', component: PagebolComponent},
      // {path: 'pagecol1', component: Pagecol1Component},
      // {path: 'pagecol2', component: Pagecol2Component},
      {path: '', redirectTo: '', pathMatch: 'full'},
      // {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
