import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { Observable } from 'rxjs';

import { MealsEffects } from './meals.effects';
import * as MealsActions from './meals.actions';
import { MealsService } from '@bba/core-data';

import { mockMealsService, mockMeal } from '@bba/testing';
import { Meal } from '@bba/api-interfaces';

describe('MealsEffects', () => {
  let actions: Observable<any>;
  let effects: MealsEffects;
  let service: MealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        MealsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        { provide: MealsService, useValue: mockMealsService },
      ],
    });

    effects = TestBed.inject(MealsEffects);
    service = TestBed.inject(MealsService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadMeals$', () => {
    it('should return loadMealsSuccess, on success', () => {
      const meals: Meal[] = [];
      const action = MealsActions.loadMeals();
      const outcome = MealsActions.loadMealsSuccess({ meals });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: meals });
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadMeals$).toBeObservable(expected);
    });

    it('should return loadMealsFailure, on failure', () => {
      const action = MealsActions.loadMeals();
      const error = new Error();
      const outcome = MealsActions.loadMealsFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadMeals$).toBeObservable(expected);
    });
  });

  describe('loadMeal$', () => {
    it('should return success with meal', () => {
      const meal = { ...mockMeal };
      const action = MealsActions.loadMeal({ mealId: meal.id });
      const outcome = MealsActions.loadMealSuccess({ meal });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: meal });
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadMeal$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const meal = { ...mockMeal };
      const action = MealsActions.loadMeal({ mealId: meal.id });
      const error = new Error();
      const outcome = MealsActions.loadMealFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadMeal$).toBeObservable(expected);
    });
  });

  describe('createMeal$', () => {
    it('should return success with meal', () => {
      const meal = { ...mockMeal };
      const action = MealsActions.createMeal({ meal });
      const outcome = MealsActions.createMealSuccess({ meal });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: meal });
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createMeal$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const meal = { ...mockMeal };
      const action = MealsActions.createMeal({ meal });
      const error = new Error();
      const outcome = MealsActions.createMealFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createMeal$).toBeObservable(expected);
    });
  });

  describe('updateMeal$', () => {
    it('should return success with meal', () => {
      const meal = { ...mockMeal };
      const action = MealsActions.updateMeal({ meal });
      const outcome = MealsActions.updateMealSuccess({ meal });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: meal });
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateMeal$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const meal = { ...mockMeal };
      const action = MealsActions.updateMeal({ meal });
      const error = new Error();
      const outcome = MealsActions.updateMealFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateMeal$).toBeObservable(expected);
    });
  });

  describe('deleteMeal$', () => {
    it('should return success with meal', () => {
      const meal = { ...mockMeal };
      const action = MealsActions.deleteMeal({ meal });
      const outcome = MealsActions.deleteMealSuccess({ meal });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: meal });
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteMeal$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const meal = { ...mockMeal };
      const action = MealsActions.deleteMeal({ meal });
      const error = new Error();
      const outcome = MealsActions.deleteMealFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteMeal$).toBeObservable(expected);
    });
  });
});
