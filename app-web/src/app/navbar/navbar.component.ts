import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  imags : string = "assets/images/logounir.png";
  imags1 : string = "assets/images/salar1.jpeg";
  imags2 : string = "assets/images/salar2.jpeg";

  lugar1 = "Salar de Uyuni - Bolivia";
  lugar2 = "La Playa de Belén - Colombia";
  lugar3 = "Nevado del Cocuy - Colombia";

  constructor() { }

  ngOnInit(): void {
  }

}
