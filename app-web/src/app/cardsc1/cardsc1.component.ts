import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardsc1',
  templateUrl: './cardsc1.component.html',
  styleUrls: ['./cardsc1.component.css']
})
export class Cardsc1Component implements OnInit {

  interpolationBinding1 = 'TRANS';
  oculto = true;
  constructor() { }

  ngOnInit(): void {
  }

  mostrar(){
    // console.log($event);
    this.oculto = !this.oculto;
  }
}
