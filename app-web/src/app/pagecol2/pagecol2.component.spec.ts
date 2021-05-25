import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagecol2Component } from './pagecol2.component';

describe('Pagecol2Component', () => {
  let component: Pagecol2Component;
  let fixture: ComponentFixture<Pagecol2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagecol2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagecol2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
