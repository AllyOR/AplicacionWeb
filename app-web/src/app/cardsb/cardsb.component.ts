import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardsb',
  templateUrl: './cardsb.component.html',
  styleUrls: ['./cardsb.component.css']
})
export class CardsbComponent implements OnInit {

  oculto = true;

  imgcb1 : string = "assets/images/uyuni3.jpeg";
  imgcb2 : string = "assets/images/uyuni5.jpeg";
  imgcb3 : string = "assets/images/salar9_1.jpg";
  imgcb4 : string = "assets/images/salar16.jpeg";
  imgllb : string = "assets/images/uyuni2_1.jpeg";
  imghb : string = "assets/images/salar-domos.jpg";
  imgfb1 : string = "assets/images/uyuni-food.jpeg";
  imgfb2 : string = "assets/images/uyuni-food1.jpeg";
  imgfb3 : string = "assets/images/uyuni-food3.jpeg";
  constructor() { }

  ngOnInit(): void {
  }

  mostrar(){
    this.oculto = !this.oculto;
  }
}
