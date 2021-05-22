import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagebol',
  templateUrl: './pagebol.component.html',
  styleUrls: ['./pagebol.component.css']
})
export class PagebolComponent implements OnInit {

  interpolationBinding = 'SALAR DE UYUNI';
  tituloColor = 'green';
  vista1 = false;
  vista2 = true;//TEXTO TRANS
  oculto = true;

  constructor() { }

  ngOnInit(): void {
  }

  enviar($event : any){
    console.log($event);
    this.oculto = !this.oculto;
  }
}

