import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresbComponent } from './lugaresb.component';

describe('LugaresbComponent', () => {
  let component: LugaresbComponent;
  let fixture: ComponentFixture<LugaresbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugaresbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LugaresbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
