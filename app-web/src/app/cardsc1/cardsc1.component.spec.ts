import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardsc1Component } from './cardsc1.component';

describe('Cardsc1Component', () => {
  let component: Cardsc1Component;
  let fixture: ComponentFixture<Cardsc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cardsc1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cardsc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
