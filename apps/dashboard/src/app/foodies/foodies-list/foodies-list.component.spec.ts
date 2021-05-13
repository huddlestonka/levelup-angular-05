import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodiesListComponent } from './foodies-list.component';

describe('FoodiesListComponent', () => {
  let component: FoodiesListComponent;
  let fixture: ComponentFixture<FoodiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
