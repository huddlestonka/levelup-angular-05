import { MealsEntity } from './meals.models';
import * as MealsActions from './meals.actions';
import { State, initialState, reducer } from './meals.reducer';

describe('Meals Reducer', () => {
  const createMealsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as MealsEntity);

  beforeEach(() => {});

  describe('valid Meals actions', () => {
    it('loadMealsSuccess should return set the list of known Meals', () => {
      const meals = [
        createMealsEntity('PRODUCT-AAA'),
        createMealsEntity('PRODUCT-zzz'),
      ];
      const action = MealsActions.loadMealsSuccess({ meals });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
