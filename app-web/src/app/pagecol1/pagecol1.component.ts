import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageco1',
  templateUrl: './pagecol1.component.html',
  styleUrls: ['./pagecol1.component.css']
})
export class Pagecol1Component implements OnInit {

  name = 'Colombia - Lilly Zamara Zambrano'
  lugar = 'LA PLAYA DE BELÉN';
  tituloColor = 'darkslategray';

  constructor() { }

  ngOnInit(): void {
  }

}
