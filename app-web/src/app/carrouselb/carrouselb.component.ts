import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrouselb',
  templateUrl: './carrouselb.component.html',
  styleUrls: ['./carrouselb.component.css']
})

export class CarrouselbComponent implements OnInit {

  imagb1 : string = "assets/images/salar1.jpeg";
  imagb2 : string = "assets/images/salar8_1.jpg";
  imagb3 : string = "assets/images/salar12_1.jpg";
  imagb4 : string = "assets/images/salar13_1.jpg";
  imagb5 : string = "assets/images/salar18_1.jpg";
  oculto = true;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarCarBol($event : any){
    this.oculto = !this.oculto;
  }
  enviar($event : any){

    this.oculto = !this.oculto;
  }
}

