import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { Observable } from 'rxjs';

import { FoodiesEffects } from './foodies.effects';
import * as FoodiesActions from './foodies.actions';
import { FoodiesService } from '@bba/core-data';

import { mockFoodiesService, mockFoodie } from '@bba/testing';
import { Foodie } from '@bba/api-interfaces';

describe('FoodiesEffects', () => {
  let actions: Observable<any>;
  let effects: FoodiesEffects;
  let service: FoodiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        FoodiesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        { provide: FoodiesService, useValue: mockFoodiesService },
      ],
    });

    effects = TestBed.inject(FoodiesEffects);
    service = TestBed.inject(FoodiesService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadFoodies$', () => {
    it('should return loadFoodiesSuccess, on success', () => {
      const foodies: Foodie[] = [];
      const action = FoodiesActions.loadFoodies();
      const outcome = FoodiesActions.loadFoodiesSuccess({ foodies });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: foodies });
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadFoodies$).toBeObservable(expected);
    });

    it('should return loadFoodiesFailure, on failure', () => {
      const action = FoodiesActions.loadFoodies();
      const error = new Error();
      const outcome = FoodiesActions.loadFoodiesFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadFoodies$).toBeObservable(expected);
    });
  });

  describe('loadFoodie$', () => {
    it('should return success with foodie', () => {
      const foodie = { ...mockFoodie };
      const action = FoodiesActions.loadFoodie({ foodieId: foodie.id });
      const outcome = FoodiesActions.loadFoodieSuccess({ foodie });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: foodie });
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadFoodie$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const foodie = { ...mockFoodie };
      const action = FoodiesActions.loadFoodie({ foodieId: foodie.id });
      const error = new Error();
      const outcome = FoodiesActions.loadFoodieFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadFoodie$).toBeObservable(expected);
    });
  });

  describe('createFoodie$', () => {
    it('should return success with foodie', () => {
      const foodie = { ...mockFoodie };
      const action = FoodiesActions.createFoodie({ foodie });
      const outcome = FoodiesActions.createFoodieSuccess({ foodie });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: foodie });
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createFoodie$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const foodie = { ...mockFoodie };
      const action = FoodiesActions.createFoodie({ foodie });
      const error = new Error();
      const outcome = FoodiesActions.createFoodieFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createFoodie$).toBeObservable(expected);
    });
  });

  describe('updateFoodie$', () => {
    it('should return success with foodie', () => {
      const foodie = { ...mockFoodie };
      const action = FoodiesActions.updateFoodie({ foodie });
      const outcome = FoodiesActions.updateFoodieSuccess({ foodie });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: foodie });
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateFoodie$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const foodie = { ...mockFoodie };
      const action = FoodiesActions.updateFoodie({ foodie });
      const error = new Error();
      const outcome = FoodiesActions.updateFoodieFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateFoodie$).toBeObservable(expected);
    });
  });

  describe('deleteFoodie$', () => {
    it('should return success with foodie', () => {
      const foodie = { ...mockFoodie };
      const action = FoodiesActions.deleteFoodie({ foodie });
      const outcome = FoodiesActions.deleteFoodieSuccess({ foodie });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: foodie });
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteFoodie$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const foodie = { ...mockFoodie };
      const action = FoodiesActions.deleteFoodie({ foodie });
      const error = new Error();
      const outcome = FoodiesActions.deleteFoodieFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteFoodie$).toBeObservable(expected);
    });
  });
});
