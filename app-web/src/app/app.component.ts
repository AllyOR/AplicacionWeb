import {Component} from '@angular/core';
import {InformacionService} from "./core/services/informacion.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InformacionService]
})
export class AppComponent {
  title = 'app-web';
  name = 'ZADIAL';
  visible = true;
  name1 = new InformacionService;
  name2 = this.name1.getNombreEmpresa();
}
