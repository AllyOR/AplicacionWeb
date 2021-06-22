import {Component} from '@angular/core';
import {DatosempresaService} from "./core/services/datosempresa.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatosempresaService]
})
export class AppComponent {
  title = 'app-web';
  //name = 'ZADIAL';
  visible = true;
  name1 = new DatosempresaService();
  name = this.name1.getNombreEmpresa();
}
