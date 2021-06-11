import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsbComponent } from './cardsb/cardsb.component';
import { CarrouselbComponent } from './carrouselb/carrouselb.component';
import { PagebolComponent } from './pagebol/pagebol.component';

import { RouterModule } from '@angular/router';
import { Pagecol1Component } from './pagecol1/pagecol1.component';
import { Carrouselc1Component } from './carrouselc1/carrouselc1.component';
import { Cardsc1Component } from './cardsc1/cardsc1.component';
import { FooterComponent } from './footer/footer.component';
import { ContactosComponent } from './contactos/contactos.component';
import { InicioComponent } from './inicio/inicio.component';
import { Cards2Component } from './cards2/cards2.component';
import { Pagecol2Component } from './pagecol2/pagecol2.component';
import { Carrouselc2Component } from './carrouselc2/carrouselc2.component';
import { FormsModule} from "@angular/forms";
import { NosotrosComponent } from './nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsbComponent,
    CarrouselbComponent,
    PagebolComponent,
    Pagecol1Component,
    Pagecol2Component,
    Carrouselc1Component,
    Cardsc1Component,
    FooterComponent,
    ContactosComponent,
    InicioComponent,
    Cards2Component,
    Carrouselc2Component,
    NosotrosComponent,
    // FormsModule,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot([
      {path: 'pagebol', component: PagebolComponent},
      {path: 'pagecol1', component: Pagecol1Component},
      {path: 'pagecol2', component: Pagecol2Component},
      {path: 'contactos', component: ContactosComponent},
      {path: 'nosotros', component: NosotrosComponent},
      // {path: '', redirectTo: '', pathMatch: 'full'},
      {path: '', component: InicioComponent},
      // {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
