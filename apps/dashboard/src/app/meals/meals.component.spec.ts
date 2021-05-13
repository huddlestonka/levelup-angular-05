import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { CoreDataModule } from '@bba/core-data';
import { CoreStateModule, MealsFacade } from '@bba/core-state';
import { MaterialModule } from '@bba/material';

import { MealDetailsComponent } from './meal-details/meal-details.component';
import { MealsListComponent } from './meals-list/meals-list.component';
import { MealsComponent } from './meals.component';

import { mockMeal, mockEmptyMeal } from '@bba/testing';

describe('MealsComponent', () => {
  let component: MealsComponent;
  let fixture: ComponentFixture<MealsComponent>;
  let de: DebugElement;
  let mealsFacade: MealsFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MealsComponent, MealDetailsComponent, MealsListComponent],
      imports: [
        CoreDataModule,
        CoreStateModule,
        FormsModule,
        MaterialModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    mealsFacade = TestBed.inject(MealsFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on select call mealsFacade selectMeal', () => {
    const spy = jest.spyOn(mealsFacade, 'selectMeal');

    component.selectMeal(mockMeal);

    expect(spy).toHaveBeenCalledWith(mockMeal.id);
  });

  describe('should on save call mealsFacade', () => {
    it('updateMeal', () => {
      const spy = jest.spyOn(mealsFacade, 'updateMeal');

      component.saveMeal(mockMeal);

      expect(spy).toHaveBeenCalledWith(mockMeal);
    });

    it('createMeal', () => {
      const spy = jest.spyOn(mealsFacade, 'createMeal');

      component.saveMeal(mockEmptyMeal);

      expect(spy).toHaveBeenCalledWith(mockEmptyMeal);
    });
  });

  it('should on delete call mealsFacade deleteMeal', () => {
    const spy = jest.spyOn(mealsFacade, 'deleteMeal');

    component.deleteMeal(mockMeal);

    expect(spy).toHaveBeenCalledWith(mockMeal);
  });
});
