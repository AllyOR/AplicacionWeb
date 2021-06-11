import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagebol',
  templateUrl: './pagebol.component.html',
  styleUrls: ['./pagebol.component.css']
})
export class PagebolComponent implements OnInit {

  lugar = 'SALAR DE UYUNI';
  tituloColor = 'darkslategrey';
  ocultonom = true;
  nomlug = 'Salar de Uyuni';

  constructor() { }

  ngOnInit(): void {
  }

}
