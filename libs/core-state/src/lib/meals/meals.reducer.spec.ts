import * as MealsActions from './meals.actions';
import { MealsState, initialMealsState, mealsReducer } from './meals.reducer';
import { mockMeal, mockEmptyMeal } from '@bba/testing';

describe('Meals Reducer', () => {
  let meals;

  beforeEach(() => {
    meals = [
      { ...mockMeal, id: '0' },
      { ...mockMeal, id: '1' },
      { ...mockMeal, id: '2' },
    ];
  });

  describe('valid Meals actions', () => {
    it('loadMeals should set loaded to false', () => {
      const action = MealsActions.loadMeals();
      const expectedState = {
        ...initialMealsState,
        error: null,
      };

      const result: MealsState = mealsReducer(initialMealsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadMealsSuccess should set the list of known Meals', () => {
      const action = MealsActions.loadMealsSuccess({ meals });
      const expectedState = {
        ...initialMealsState,
        loaded: true,
        entities: {
          0: meals[0],
          1: meals[1],
          2: meals[2],
        },
        ids: meals.map((meal) => meal.id),
      };

      const result: MealsState = mealsReducer(initialMealsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadMealsFailure should set error to error', () => {
      const error = new Error();
      const action = MealsActions.loadMealsFailure({ error });
      const expectedState = {
        ...initialMealsState,
        error,
      };

      const result: MealsState = mealsReducer(initialMealsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadMeal should set loaded to false', () => {
      const action = MealsActions.loadMeal({ mealId: mockMeal.id });
      const expectedState = {
        ...initialMealsState,
        loaded: false,
        error: null,
      };

      const result: MealsState = mealsReducer(initialMealsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadMealSuccess should set loaded to true', () => {
      const action = MealsActions.loadMealSuccess({ meal: mockMeal });
      const expectedState = {
        ...initialMealsState,
        loaded: true,
        entities: {
          0: mockMeal,
        },
        ids: [mockMeal.id],
      };

      const result: MealsState = mealsReducer(initialMealsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadMealFailure should set error to error', () => {
      const error = new Error();
      const action = MealsActions.loadMealFailure({ error });
      const expectedState = {
        ...initialMealsState,
        error,
      };

      const result: MealsState = mealsReducer(initialMealsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('updateMealSuccess should modify meal', () => {
      const prepAction = MealsActions.loadMealSuccess({
        meal: { ...mockEmptyMeal, id: mockMeal.id },
      });
      const prepState: MealsState = mealsReducer(initialMealsState, prepAction);

      const expectedState = {
        ...initialMealsState,
        loaded: true,
        entities: {
          0: mockMeal,
        },
        ids: [mockMeal.id],
      };

      const action = MealsActions.updateMealSuccess({ meal: mockMeal });
      const result: MealsState = mealsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('updateMealFailure should set error to error', () => {
      const error = new Error();
      const action = MealsActions.updateMealFailure({ error });
      const expectedState = {
        ...initialMealsState,
        error,
      };

      const result: MealsState = mealsReducer(initialMealsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('createMealSuccess should add meal', () => {
      const action = MealsActions.createMealSuccess({ meal: mockMeal });
      const expectedState = {
        ...initialMealsState,
        loaded: false,
        entities: {
          0: mockMeal,
        },
        ids: [mockMeal.id],
      };

      const result: MealsState = mealsReducer(initialMealsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('createMealFailure should set error to error', () => {
      const error = new Error();
      const action = MealsActions.createMealFailure({ error });
      const expectedState = {
        ...initialMealsState,
        error,
      };

      const result: MealsState = mealsReducer(initialMealsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteMealSuccess should add meal', () => {
      const prepAction = MealsActions.loadMealSuccess({
        meal: mockMeal,
      });
      const prepState: MealsState = mealsReducer(initialMealsState, prepAction);

      const expectedState = {
        ...initialMealsState,
        loaded: true,
      };

      const action = MealsActions.deleteMealSuccess({ meal: mockMeal });
      const result: MealsState = mealsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteMealFailure should set error to error', () => {
      const error = new Error();
      const action = MealsActions.deleteMealFailure({ error });
      const expectedState = {
        ...initialMealsState,
        error,
      };

      const result: MealsState = mealsReducer(initialMealsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('selectMeal should set selectedId', () => {
      const action = MealsActions.selectMeal({ selectedId: mockMeal.id });
      const expectedState = {
        ...initialMealsState,
        selectedId: mockMeal.id,
      };

      const result: MealsState = mealsReducer(initialMealsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('resetSelectedMeal should reset selectedId', () => {
      const prepAction = MealsActions.selectMeal({
        selectedId: mockMeal.id,
      });
      const prepState = mealsReducer(initialMealsState, prepAction);

      const action = MealsActions.resetSelectedMeal();
      const expectedState = {
        ...initialMealsState,
        selectedId: null,
      };

      const result: MealsState = mealsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('resetMeals should reset meals', () => {
      const prepAction = MealsActions.loadMealsSuccess({ meals });
      const prepState: MealsState = mealsReducer(initialMealsState, prepAction);

      const expectedState = {
        ...initialMealsState,
        loaded: true,
      };

      const action = MealsActions.resetMeals();
      const result: MealsState = mealsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result: MealsState = mealsReducer(initialMealsState, action);

      expect(result).toBe(initialMealsState);
    });
  });
});
