import { Component, OnInit } from '@angular/core';
import {DatosempresaService} from "../core/services/datosempresa.service";
import {InformacionService} from "../core/services/informacion.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [DatosempresaService]
})
export class NavbarComponent implements OnInit {

  imags : string = "assets/images/general/logounir.png";
  // name1 = 'ZADIAL';
  // name2 = 'WEB';
  eval = true;//1;

  lugar1 = "Salar de Uyuni - Bolivia";
  lugar2 = "La Playa de Belén - Colombia";
  lugar3 = "Nevado del Cocuy - Colombia";

  constructor(private datosEmpresa: DatosempresaService) {

  }

  ngOnInit(): void {
  }

  nombreEm = this.datosEmpresa.getNombreEmpresa();
  //n = this.informacion.leer();

  visible = true;
}
