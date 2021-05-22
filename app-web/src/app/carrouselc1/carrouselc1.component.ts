import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-carrouselc1',
  templateUrl: './carrouselc1.component.html',
  styleUrls: ['./carrouselc1.component.css']
})
export class Carrouselc1Component implements OnInit {
  imagc11 : string = "assets/images/img-col1/como-llegar-g.jpg";
  imagc12 : string = "assets/images/img-col1/qv-laplaya.jpg";
  constructor() { }
  ngOnInit(): void {
  }
}
