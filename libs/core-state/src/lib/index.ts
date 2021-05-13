import { Params } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import * as fromFoodies from './foodies/foodies.reducer';
import * as fromMeals from './meals/meals.reducer';

import * as FoodiesSelectors from './foodies/foodies.selectors';
import * as MealsSelectors from './meals/meals.selectors';
import { Foodie, Meal } from '@bba/api-interfaces';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

// ---------------------------------------
// Core State and Reducers
// ---------------------------------------

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  [fromFoodies.FOODIES_FEATURE_KEY]: fromFoodies.FoodiesState;
  [fromMeals.MEALS_FEATURE_KEY]: fromMeals.MealsState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  [fromFoodies.FOODIES_FEATURE_KEY]: fromFoodies.foodiesReducer,
  [fromMeals.MEALS_FEATURE_KEY]: fromMeals.mealsReducer,
};

// -------------------------------------------------------------------
// Common Selectors
// -------------------------------------------------------------------
export const getFoodieMeals = createSelector(
  FoodiesSelectors.getAllFoodies,
  MealsSelectors.getAllMeals,
  (foodies: Foodie[], meals: Meal[]) => {
    return foodies.map((foodie) => ({
      ...foodie,
      meals: meals.filter((meals) => meals.foodieId === foodie.id),
    }));
  }
);
