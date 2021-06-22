import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosempresaService {

  nombreEmpresa = 'ZADIAL';

  constructor() { }

  getNombreEmpresa(){
    return this.nombreEmpresa;
  }
}
