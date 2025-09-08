import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerGraphComponent } from './career-graph.component';

describe('CareerGraphComponent', () => {
  let component: CareerGraphComponent;
  let fixture: ComponentFixture<CareerGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
