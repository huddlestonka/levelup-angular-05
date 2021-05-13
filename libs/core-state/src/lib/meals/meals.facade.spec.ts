import { TestBed } from '@angular/core/testing';
import { ActionsSubject } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { MealsFacade } from './meals.facade';
import * as MealsActions from './meals.actions';
import { initialMealsState } from './meals.reducer';

import { mockMeal } from '@bba/testing';

describe('MealsFacade', () => {
  let facade: MealsFacade;
  let actionSubject;
  const mockActionsSubject = new ActionsSubject();
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MealsFacade,
        provideMockStore({ initialState: initialMealsState }),
        { provide: ActionsSubject, useValue: mockActionsSubject },
      ],
    });

    facade = TestBed.inject(MealsFacade);
    actionSubject = TestBed.inject(ActionsSubject);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should have mutations', (done) => {
    const action = MealsActions.createMeal({ meal: mockMeal });
    actionSubject.next(action);

    facade.mutations$.subscribe((result) => {
      expect(result).toBe(action);
      done();
    });
  });

  describe('should dispatch', () => {
    it('select on select(meal.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.selectMeal(mockMeal.id);

      const action = MealsActions.selectMeal({ selectedId: mockMeal.id });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadMeals on loadMeals()', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadMeals();

      const action = MealsActions.loadMeals();

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadMeal on loadMeal(meal.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadMeal(mockMeal.id);

      const action = MealsActions.loadMeal({ mealId: mockMeal.id });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('createMeal on createMeal(meal)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.createMeal(mockMeal);

      const action = MealsActions.createMeal({ meal: mockMeal });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('updateMeal on updateMeal(meal)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.updateMeal(mockMeal);

      const action = MealsActions.updateMeal({ meal: mockMeal });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('delete on delete(model)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.deleteMeal(mockMeal);

      const action = MealsActions.deleteMeal({ meal: mockMeal });

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
