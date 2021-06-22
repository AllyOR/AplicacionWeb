import { Component, OnInit } from '@angular/core';
import {DatosempresaService} from "../core/services/datosempresa.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name = this.datosEmpresa.getNombreEmpresa();
  existe = 0;
  red0 = 'Email: zadial@gmail.com';
  red1 = 'Facebook: @zadial';
  red2 = 'Instagram: @zadial';
  red3 = 'Twitter: @zadial';

  constructor(private datosEmpresa: DatosempresaService) { }

  ngOnInit(): void {
  }

}
