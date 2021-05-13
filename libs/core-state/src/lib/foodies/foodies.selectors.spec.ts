import { FoodiesEntity } from './foodies.models';
import { State, foodiesAdapter, initialState } from './foodies.reducer';
import * as FoodiesSelectors from './foodies.selectors';

describe('Foodies Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getFoodiesId = (it) => it['id'];
  const createFoodiesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as FoodiesEntity);

  let state;

  beforeEach(() => {
    state = {
      foodies: foodiesAdapter.setAll(
        [
          createFoodiesEntity('PRODUCT-AAA'),
          createFoodiesEntity('PRODUCT-BBB'),
          createFoodiesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Foodies Selectors', () => {
    it('getAllFoodies() should return the list of Foodies', () => {
      const results = FoodiesSelectors.getAllFoodies(state);
      const selId = getFoodiesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = FoodiesSelectors.getSelected(state);
      const selId = getFoodiesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getFoodiesLoaded() should return the current 'loaded' status", () => {
      const result = FoodiesSelectors.getFoodiesLoaded(state);

      expect(result).toBe(true);
    });

    it("getFoodiesError() should return the current 'error' state", () => {
      const result = FoodiesSelectors.getFoodiesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
