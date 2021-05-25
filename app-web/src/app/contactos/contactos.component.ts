import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  name = 'BIENVENIDOS!';
  ocu = false;

  lista = [
    {
      "nombre":"Alison Orellana Rios",
      "descripcion":"Ing. Informática",
      "lugar": "Cochabamba - Bolivia"
    },
    {
      "nombre":"Lilly Zamara Zambrano",
      "descripcion":"Diseñadora gráfica",
      "lugar": "Ocaña - Colombia"
    },
    {
      "nombre":"Diego Romero Cárdenas",
      "descripcion":"Diseñador gráfico",
      "lugar": "Bogotá - Colombia"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
