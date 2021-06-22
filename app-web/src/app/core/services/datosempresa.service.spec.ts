import { TestBed } from '@angular/core/testing';

import { DatosempresaService } from './datosempresa.service';

describe('DatosempresaService', () => {
  let service: DatosempresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosempresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
