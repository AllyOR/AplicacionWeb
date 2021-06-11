import { Component, OnInit } from '@angular/core';
import {InformacionService} from "../core/services/informacion.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  imags : string = "assets/images/general/logounir.png";
  // name1 = 'ZADIAL';
  // name2 = 'WEB';
  eval = true;//1;

  lugar1 = "Salar de Uyuni - Bolivia";
  lugar2 = "La Playa de Belén - Colombia";
  lugar3 = "Nevado del Cocuy - Colombia";

  constructor(private informacion: InformacionService) {

  }

  // ngOnInit(): void {
  // }

  ngOnInit(): void {
    // console.log(this.mostrar2());
  }

  count1 = this.informacion.total();
  nombreEm = this.informacion.getNombreEmpresa();
  //n = this.informacion.leer();

  visible = true;
  // mostrarNav() {
  //   //this.count1 = this.infoLikes;
  //   console.log(this.count1);
  //   console.log(this.n);
  //   return this.n;
  // }
  // ll = this.mostrarNav();

  // mostrar2(){
  //   this.count = this.informacion.total();
  //   this.n = this.informacion.leer();
  //   console.log(this.n);
  //   this.conteoLikes();
  //   return this.n;
  // }
  // conteoLikes(){
  //   this.count++
  //   if (this.count > 3){
  //     // console.log(this.count)
  //     window.alert("Gracias por tu apoyo!, seguiremos mejorando");
  //   }
  // }
  // ll2 = this.mostrar2();
}
