import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagebolComponent } from './pagebol.component';

describe('PagebolComponent', () => {
  let component: PagebolComponent;
  let fixture: ComponentFixture<PagebolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagebolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagebolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
