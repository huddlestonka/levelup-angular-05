import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  FOODIES_FEATURE_KEY,
  State,
  FoodiesPartialState,
  foodiesAdapter,
} from './foodies.reducer';

// Lookup the 'Foodies' feature state managed by NgRx
export const getFoodiesState = createFeatureSelector<
  FoodiesPartialState,
  State
>(FOODIES_FEATURE_KEY);

const { selectAll, selectEntities } = foodiesAdapter.getSelectors();

export const getFoodiesLoaded = createSelector(
  getFoodiesState,
  (state: State) => state.loaded
);

export const getFoodiesError = createSelector(
  getFoodiesState,
  (state: State) => state.error
);

export const getAllFoodies = createSelector(getFoodiesState, (state: State) =>
  selectAll(state)
);

export const getFoodiesEntities = createSelector(
  getFoodiesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getFoodiesState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getFoodiesEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
