import { Meal } from '@bba/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MEALS_FEATURE_KEY, MealsState, mealsAdapter } from './meals.reducer';

// Lookup the 'Meals' feature state managed by NgRx
export const getMealsState = createFeatureSelector<MealsState>(
  MEALS_FEATURE_KEY
);

const { selectAll, selectEntities } = mealsAdapter.getSelectors();

export const getMealsLoaded = createSelector(
  getMealsState,
  (state: MealsState) => state.loaded
);

export const getMealsError = createSelector(
  getMealsState,
  (state: MealsState) => state.error
);

export const getAllMeals = createSelector(getMealsState, (state: MealsState) =>
  selectAll(state)
);

export const getMealsEntities = createSelector(
  getMealsState,
  (state: MealsState) => selectEntities(state)
);

export const getSelectedMealId = createSelector(
  getMealsState,
  (state: MealsState) => state.selectedId
);

export const getSelectedMeal = createSelector(
  getMealsEntities,
  getSelectedMealId,
  (entities, selectedId) => {
    const emptyMeal: Meal = {
      id: '',
      title: '',
      description: '',
      type: '',
      time: '',
      foodieId: '',
    };

    return selectedId ? entities[selectedId] : emptyMeal;
  }
);
