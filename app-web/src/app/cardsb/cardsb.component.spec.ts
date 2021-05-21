import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsbComponent } from './cardsb.component';

describe('CardsbComponent', () => {
  let component: CardsbComponent;
  let fixture: ComponentFixture<CardsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
