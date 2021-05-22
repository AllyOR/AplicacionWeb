import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagebol',
  templateUrl: './pagebol.component.html',
  styleUrls: ['./pagebol.component.css']
})
export class PagebolComponent implements OnInit {

  name = 'Bolivia - Alison Orellana Rios'
  interpolationBinding = 'SALAR DE UYUNI';
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

