import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodieDetailsComponent } from './foodie-details.component';

describe('FoodieDetailsComponent', () => {
  let component: FoodieDetailsComponent;
  let fixture: ComponentFixture<FoodieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodieDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
