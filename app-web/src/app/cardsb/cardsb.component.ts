import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardsb',
  templateUrl: './cardsb.component.html',
  styleUrls: ['./cardsb.component.css']
})
export class CardsbComponent implements OnInit {

  oculto = true;
  preg1 = "¿Qué visitar?";
  preg2 = "¿Cómo llegar?";
  preg3 = "¿Dónde hospedarse?";
  preg4 = "¿Qué comer?";

  constructor() { }

  ngOnInit(): void {
  }

  mostrar(){
    this.oculto = !this.oculto;
  }
}
