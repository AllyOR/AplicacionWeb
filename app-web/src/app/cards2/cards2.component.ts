import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards2',
  templateUrl: './cards2.component.html',
  styleUrls: ['./cards2.component.css']
})
export class Cards2Component implements OnInit {

  preg1 = "¿Qué visitar?";
  preg2 = "¿Cómo llegar?";
  preg3 = "¿Dónde hospedarse?";
  preg4 = "¿Qué comer?";

  constructor() { }

  ngOnInit(): void {
  }

}
