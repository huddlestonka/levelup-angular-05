import { Foodie } from '@bba/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  FOODIES_FEATURE_KEY,
  FoodiesState,
  foodiesAdapter,
} from './foodies.reducer';

// Lookup the 'Foodies' feature state managed by NgRx
export const getFoodiesState = createFeatureSelector<FoodiesState>(
  FOODIES_FEATURE_KEY
);

const { selectAll, selectEntities } = foodiesAdapter.getSelectors();

export const getFoodiesLoaded = createSelector(
  getFoodiesState,
  (state: FoodiesState) => state.loaded
);

export const getFoodiesError = createSelector(
  getFoodiesState,
  (state: FoodiesState) => state.error
);

export const getAllFoodies = createSelector(
  getFoodiesState,
  (state: FoodiesState) => selectAll(state)
);

export const getFoodiesEntities = createSelector(
  getFoodiesState,
  (state: FoodiesState) => selectEntities(state)
);

export const getSelectedFoodieId = createSelector(
  getFoodiesState,
  (state: FoodiesState) => state.selectedId
);

export const getSelectedFoodie = createSelector(
  getFoodiesEntities,
  getSelectedFoodieId,
  (entities, selectedId) => {
    const emptyFoodie: Foodie = {
      id: '',
      nickName: '',
      firstName: '',
      lastName: '',
      email: '',
      type: '',
      meals: [],
    };

    return selectedId ? entities[selectedId] : emptyFoodie;
  }
);
