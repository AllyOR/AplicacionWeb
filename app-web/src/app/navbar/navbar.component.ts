import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  imags : string = "assets/images/general/logounir.png";
  name1 = 'ZADIAL';
  name2 = 'WEB';
  eval = 1;

  lugar1 = "Salar de Uyuni - Bolivia";
  lugar2 = "La Playa de Belén - Colombia";
  lugar3 = "Nevado del Cocuy - Colombia";

  constructor() { }

  ngOnInit(): void {
  }
}
