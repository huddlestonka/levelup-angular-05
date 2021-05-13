import { MealsState, mealsAdapter, initialMealsState } from './meals.reducer';
import * as MealsSelectors from './meals.selectors';

import { Meal } from '@bba/api-interfaces';
import { mockMeal } from '@bba/testing';

describe('Meals Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getMealsId = (it) => it['id'];
  const createMeal = (id: string, name = '') =>
    ({ ...mockMeal, id: id } as Meal);

  let state;

  beforeEach(() => {
    state = {
      meals: mealsAdapter.setAll(
        [
          createMeal('PRODUCT-AAA'),
          createMeal('PRODUCT-BBB'),
          createMeal('PRODUCT-CCC'),
        ],
        {
          ...initialMealsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Meals Selectors', () => {
    it('getAllMeals() should return the list of Meals', () => {
      const results = MealsSelectors.getAllMeals(state);
      const selId = getMealsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = MealsSelectors.getSelectedMeal(state);
      const selId = getMealsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getMealsLoaded() should return the current 'loaded' status", () => {
      const result = MealsSelectors.getMealsLoaded(state);

      expect(result).toBe(true);
    });

    it("getMealsError() should return the current 'error' state", () => {
      const result = MealsSelectors.getMealsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
