import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrouselb',
  templateUrl: './carrouselb.component.html',
  styleUrls: ['./carrouselb.component.css']
})

export class CarrouselbComponent implements OnInit {

  imagb1 : string = "assets/images/img-slider01.jpg";
  imagb2 : string = "assets/images/img-slider02.jpg";
  imagb3 : string = "assets/images/img-slider03.jpg";
  imagb4 : string = "assets/images/img-slider04.jpg";
  imagb5 : string = "assets/images/img-slider05.jpg";
  oculto = true;

  constructor() { }

  ngOnInit(): void {
  }
}

