import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  name = 'Diseño y Tecnología Web';
  mr = 'Máster Universitario en Diseño y Producción Multimedia';
  tituloColor = 'darkblue';
  oculto = true;

  constructor() { }

  ngOnInit(): void {
  }

  mostrar($event : any){
    this.oculto = !this.oculto;
  }
}
