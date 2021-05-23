import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageco1',
  templateUrl: './pagecol1.component.html',
  styleUrls: ['./pagecol1.component.css']
})
export class Pagecol1Component implements OnInit {

  name = 'Colombia - Lilly Zamara Zambrano'
  interpolationBinding = 'LA PLAYA DE BELÉN';
  tituloColor = 'darkblue';
  colorl = 'lightgray';
  // vista1 = false;
  vista2 = true;//TEXTO TRANSP
  oculto = true;

  constructor() { }

  ngOnInit(): void {
  }

  enviar($event : any){
    console.log($event);
    this.oculto = !this.oculto;
  }
}

