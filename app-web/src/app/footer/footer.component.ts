import { Component, OnInit } from '@angular/core';
import {InformacionService} from "../core/services/informacion.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name = this.informacion.getNombreEmpresa();
  existe = 0;
  red0 = 'Email: zadial@gmail.com';
  red1 = 'Facebook: @zadial';
  red2 = 'Instagram: @zadial';
  red3 = 'Twitter: @zadial';

  constructor(private informacion: InformacionService) { }

  ngOnInit(): void {
  }


}
