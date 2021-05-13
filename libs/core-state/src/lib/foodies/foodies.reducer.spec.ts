import * as FoodiesActions from './foodies.actions';
import {
  FoodiesState,
  initialFoodiesState,
  foodiesReducer,
} from './foodies.reducer';
import { mockFoodie, mockEmptyFoodie } from '@bba/testing';

describe('Foodies Reducer', () => {
  let foodies;

  beforeEach(() => {
    foodies = [
      { ...mockFoodie, id: '0' },
      { ...mockFoodie, id: '1' },
      { ...mockFoodie, id: '2' },
    ];
  });

  describe('valid Foodies actions', () => {
    it('loadFoodies should set loaded to false', () => {
      const action = FoodiesActions.loadFoodies();
      const expectedState = {
        ...initialFoodiesState,
        error: null,
      };

      const result: FoodiesState = foodiesReducer(initialFoodiesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadFoodiesSuccess should set the list of known Foodies', () => {
      const action = FoodiesActions.loadFoodiesSuccess({ foodies });
      const expectedState = {
        ...initialFoodiesState,
        loaded: true,
        entities: {
          0: foodies[0],
          1: foodies[1],
          2: foodies[2],
        },
        ids: foodies.map((foodie) => foodie.id),
      };

      const result: FoodiesState = foodiesReducer(initialFoodiesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadFoodiesFailure should set error to error', () => {
      const error = new Error();
      const action = FoodiesActions.loadFoodiesFailure({ error });
      const expectedState = {
        ...initialFoodiesState,
        error,
      };

      const result: FoodiesState = foodiesReducer(initialFoodiesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadFoodie should set loaded to false', () => {
      const action = FoodiesActions.loadFoodie({
        foodieId: mockFoodie.id,
      });
      const expectedState = {
        ...initialFoodiesState,
        loaded: false,
        error: null,
      };

      const result: FoodiesState = foodiesReducer(initialFoodiesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadFoodieSuccess should set loaded to true', () => {
      const action = FoodiesActions.loadFoodieSuccess({
        foodie: mockFoodie,
      });
      const expectedState = {
        ...initialFoodiesState,
        loaded: true,
        entities: {
          0: mockFoodie,
        },
        ids: [mockFoodie.id],
      };

      const result: FoodiesState = foodiesReducer(initialFoodiesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadFoodieFailure should set error to error', () => {
      const error = new Error();
      const action = FoodiesActions.loadFoodieFailure({ error });
      const expectedState = {
        ...initialFoodiesState,
        error,
      };

      const result: FoodiesState = foodiesReducer(initialFoodiesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('updateFoodieSuccess should modify foodie', () => {
      const prepAction = FoodiesActions.loadFoodieSuccess({
        foodie: { ...mockEmptyFoodie, id: mockFoodie.id },
      });
      const prepState: FoodiesState = foodiesReducer(
        initialFoodiesState,
        prepAction
      );

      const expectedState = {
        ...initialFoodiesState,
        loaded: true,
        entities: {
          0: mockFoodie,
        },
        ids: [mockFoodie.id],
      };

      const action = FoodiesActions.updateFoodieSuccess({
        foodie: mockFoodie,
      });
      const result: FoodiesState = foodiesReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('updateFoodieFailure should set error to error', () => {
      const error = new Error();
      const action = FoodiesActions.updateFoodieFailure({ error });
      const expectedState = {
        ...initialFoodiesState,
        error,
      };

      const result: FoodiesState = foodiesReducer(initialFoodiesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('createFoodieSuccess should add foodie', () => {
      const action = FoodiesActions.createFoodieSuccess({
        foodie: mockFoodie,
      });
      const expectedState = {
        ...initialFoodiesState,
        loaded: false,
        entities: {
          0: mockFoodie,
        },
        ids: [mockFoodie.id],
      };

      const result: FoodiesState = foodiesReducer(initialFoodiesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('createFoodieFailure should set error to error', () => {
      const error = new Error();
      const action = FoodiesActions.createFoodieFailure({ error });
      const expectedState = {
        ...initialFoodiesState,
        error,
      };

      const result: FoodiesState = foodiesReducer(initialFoodiesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteFoodieSuccess should add foodie', () => {
      const prepAction = FoodiesActions.loadFoodieSuccess({
        foodie: mockFoodie,
      });
      const prepState: FoodiesState = foodiesReducer(
        initialFoodiesState,
        prepAction
      );

      const expectedState = {
        ...initialFoodiesState,
        loaded: true,
      };

      const action = FoodiesActions.deleteFoodieSuccess({
        foodie: mockFoodie,
      });
      const result: FoodiesState = foodiesReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteFoodieFailure should set error to error', () => {
      const error = new Error();
      const action = FoodiesActions.deleteFoodieFailure({ error });
      const expectedState = {
        ...initialFoodiesState,
        error,
      };

      const result: FoodiesState = foodiesReducer(initialFoodiesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('selectFoodie should set selectedId', () => {
      const action = FoodiesActions.selectFoodie({
        selectedId: mockFoodie.id,
      });
      const expectedState = {
        ...initialFoodiesState,
        selectedId: mockFoodie.id,
      };

      const result: FoodiesState = foodiesReducer(initialFoodiesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('resetSelectedFoodie should reset selectedId', () => {
      const prepAction = FoodiesActions.selectFoodie({
        selectedId: mockFoodie.id,
      });
      const prepState = foodiesReducer(initialFoodiesState, prepAction);

      const action = FoodiesActions.resetSelectedFoodie();
      const expectedState = {
        ...initialFoodiesState,
        selectedId: null,
      };

      const result: FoodiesState = foodiesReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('resetFoodies should reset foodies', () => {
      const prepAction = FoodiesActions.loadFoodiesSuccess({ foodies });
      const prepState: FoodiesState = foodiesReducer(
        initialFoodiesState,
        prepAction
      );

      const expectedState = {
        ...initialFoodiesState,
        loaded: true,
      };

      const action = FoodiesActions.resetFoodies();
      const result: FoodiesState = foodiesReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result: FoodiesState = foodiesReducer(initialFoodiesState, action);

      expect(result).toBe(initialFoodiesState);
    });
  });
});
