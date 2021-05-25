import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-carrouselc2',
  templateUrl: './carrouselc2.component.html',
  styleUrls: ['./carrouselc2.component.css']
})
export class Carrouselc2Component implements OnInit {
  imagc6: string = "assets/images/img-col2/img-slider01.jpg";
  imagc7: string = "assets/images/img-col2/img-slider02.jpg";
  imagc8: string = "assets/images/img-col2/img-slider03.jpg";
  imagc9: string = "assets/images/img-col2/img-slider04.jpg";
  imagc10: string = "assets/images/img-col2/img-slider05.jpg";
  constructor() { }
  ngOnInit(): void {
  }
}
