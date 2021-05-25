import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagecol2',
  templateUrl: './pagecol2.component.html',
  styleUrls: ['./pagecol2.component.css']
})
export class Pagecol2Component implements OnInit {

  name = 'Colombia - Diego Romero Cárdenas'
  lugar = 'NEVADO DEL COCUY';
  tituloColor = 'darkblue';

  constructor() { }

  ngOnInit(): void {
  }

}
