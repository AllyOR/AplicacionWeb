import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  numero = '';
  ocu = false;
  listaTodo = [];

  lista = [
    {
      "nombre":"Alison Orellana Rios",
      "descripcion":"Ing. Informática",
      "lugar": "Cochabamba - Bolivia"
    },
    {
      "nombre":"Lilly Zamara Zambrano",
      "descripcion":"Diseño",
      "lugar": "assets/images/salar18_1.jpg"
    },
    {
      "nombre":"Diego Romero",
      "descripcion":"Diseño",
      "lugar": "assets/images/salar18_1.jpg"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
