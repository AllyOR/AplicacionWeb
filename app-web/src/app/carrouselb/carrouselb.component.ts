import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrouselb',
  templateUrl: './carrouselb.component.html',
  styleUrls: ['./carrouselb.component.css']
})

export class CarrouselbComponent implements OnInit {

  imagb1 : string = "assets/images/bol/salar1.jpeg";
  imagb2 : string = "assets/images/bol/salar8_1.jpg";
  imagb3 : string = "assets/images/bol/salar12_1.jpg";
  imagb4 : string = "assets/images/bol/salar13_1.jpg";
  imagb5 : string = "assets/images/bol/salar18_1.jpg";
  oculto = true;

  constructor() { }

  ngOnInit(): void {
  }
}

