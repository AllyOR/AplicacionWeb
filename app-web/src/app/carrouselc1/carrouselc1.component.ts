import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-carrouselc1',
  templateUrl: './carrouselc1.component.html',
  styleUrls: ['./carrouselc1.component.css']
})
export class Carrouselc1Component implements OnInit {
  imagc11 : string = "assets/images/img-col1/slider-c1.jpg";
  imagc12 : string = "assets/images/img-col1/slider-c2.jpg";
  imagc13 : string = "assets/images/img-col1/slider-c3.jpg";
  imagc14 : string = "assets/images/img-col1/slider-c4.jpg";
  imagc15 : string = "assets/images/img-col1/slider-c5.jpg";
  constructor() { }
  ngOnInit(): void {
  }
}
