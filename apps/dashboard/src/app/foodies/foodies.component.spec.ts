import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodiesComponent } from './foodies.component';

describe('FoodiesComponent', () => {
  let component: FoodiesComponent;
  let fixture: ComponentFixture<FoodiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
