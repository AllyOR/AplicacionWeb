import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  imags : string = "assets/images/general/logounir.png";
  mostrarNom = true;
  name1 = 'ZADIAL';
  name2 = 'WEB';
  eval = 1;

  lugar1 = "Salar de Uyuni - Bolivia";
  lugar2 = "La Playa de Belén - Colombia";
  lugar3 = "Nevado del Cocuy - Colombia";

  constructor() { }

  ngOnInit(): void {
  }

  // pers = 'unir';
  // mostrarLogo(){
    // if (this.mostrarNom == true){
    // // if (this.pers == 'unir'){
    //   this.imags = "assets/images/general/logounir.png";
    // }else{
    //   this.imags = "assets/images/general/logootra.png";
    // }
  // }
}
