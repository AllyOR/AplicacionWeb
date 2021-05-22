import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrouselb',
  templateUrl: './carrouselb.component.html',
  styleUrls: ['./carrouselb.component.css']
})

export class CarrouselbComponent implements OnInit {


  imagb1 : string = "assets/images/salar1.jpeg";
  imagb2 : string = "assets/images/salar1.jpeg";
  imagb3 : string = "assets/images/salar2.jpeg";
  imagb4 : string = "assets/images/salar2.jpeg";
  imagb5 : string = "assets/images/salar2.jpeg";

  constructor() { }

  ngOnInit(): void {
  }

}

