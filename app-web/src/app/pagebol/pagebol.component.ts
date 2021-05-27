import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagebol',
  templateUrl: './pagebol.component.html',
  styleUrls: ['./pagebol.component.css']
})
export class PagebolComponent implements OnInit {

  name = 'Alison Orellana Rios';
  lugar = 'SALAR DE UYUNI';
  tituloColor = 'darkblue';
  oculto = true;
  ocultonom = true;
  nomlug = 'Salar de Uyuni';

  constructor() { }

  ngOnInit(): void {
  }

  mostrar($event : any){
    console.log($event);
    this.oculto = !this.oculto;
  }
}

