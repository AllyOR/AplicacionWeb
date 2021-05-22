import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrouselc1Component } from './carrouselc1.component';

describe('Carrouselc1Component', () => {
  let component: Carrouselc1Component;
  let fixture: ComponentFixture<Carrouselc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carrouselc1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Carrouselc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
