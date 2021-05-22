import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagecol1Component } from './pagecol1.component';

describe('Pagecol1Component', () => {
  let component: Pagecol1Component;
  let fixture: ComponentFixture<Pagecol1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagecol1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagecol1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
