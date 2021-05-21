import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselbComponent } from './carrouselb.component';

describe('CarrouselbComponent', () => {
  let component: CarrouselbComponent;
  let fixture: ComponentFixture<CarrouselbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
