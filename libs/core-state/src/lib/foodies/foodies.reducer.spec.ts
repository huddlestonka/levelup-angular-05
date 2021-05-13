import { FoodiesEntity } from './foodies.models';
import * as FoodiesActions from './foodies.actions';
import { State, initialState, reducer } from './foodies.reducer';

describe('Foodies Reducer', () => {
  const createFoodiesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as FoodiesEntity);

  beforeEach(() => {});

  describe('valid Foodies actions', () => {
    it('loadFoodiesSuccess should return set the list of known Foodies', () => {
      const foodies = [
        createFoodiesEntity('PRODUCT-AAA'),
        createFoodiesEntity('PRODUCT-zzz'),
      ];
      const action = FoodiesActions.loadFoodiesSuccess({ foodies });

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
