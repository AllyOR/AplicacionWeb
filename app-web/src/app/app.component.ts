import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-web';
  tituloColor = "green";
  colorl = "blue";
  name = 'ZADIAL';
  imags : string = "assets/images/logounir.png";
  imags1 : string = "assets/images/salar1.jpeg";
  imags2 : string = "assets/images/salar2.jpeg";

}
