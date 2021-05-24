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
      "descripcion":"Ing. Informática"
    },
    {
      "nombre":"Lilly Zamara Zambrano",
      "descripcion":"Diseño"
    },
    {
      "nombre":"Diego Romero",
      "descripcion":"Diseño"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
