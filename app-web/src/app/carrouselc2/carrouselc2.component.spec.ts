import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrouselc2Component } from './carrouselc2.component';

describe('Carrouselc2Component', () => {
  let component: Carrouselc2Component;
  let fixture: ComponentFixture<Carrouselc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carrouselc2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Carrouselc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
