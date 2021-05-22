import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagecol1',
  templateUrl: './pagecol1.component.html',
  styleUrls: ['./pagecol1.component.css']
})
export class Pagecol1Component implements OnInit {

  interpolationBinding = 'LA PLAYA DE BELÉN';
  tituloColor = 'darkblue';
  constructor() { }

  ngOnInit(): void {
  }

}
