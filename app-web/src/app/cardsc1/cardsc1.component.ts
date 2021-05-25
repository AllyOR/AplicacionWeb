import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardsc1',
  templateUrl: './cardsc1.component.html',
  styleUrls: ['./cardsc1.component.css']
})
export class Cardsc1Component implements OnInit {

  interpolationBinding1 = 'TRANS';
  oculto = true;
  nombre = "Playa";

  preg1 = "¿Qué visitar?";
  preg2 = "¿Cómo llegar?";
  preg3 = "¿Dónde hospedarse?";
  preg4 = "¿Qué comer?";
  constructor() { }

  ngOnInit(): void {
  }
}
