import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagecol1',
  templateUrl: './pagecol1.component.html',
  styleUrls: ['./pagecol1.component.css']
})
export class Pagecol1Component implements OnInit {

  interpolationBinding = 'COLOMBIA';
  tituloColor = 'green';
  vista1 = false;
  oculto = true;
  constructor() { }

  ngOnInit(): void {
  }

}
