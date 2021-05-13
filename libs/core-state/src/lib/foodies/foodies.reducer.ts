import { Foodie } from '@bba/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as FoodiesActions from './foodies.actions';

export const FOODIES_FEATURE_KEY = 'foodies';

export interface FoodiesState extends EntityState<Foodie> {
  selectedId?: string | number; // which Foodies record has been selected
  loaded: boolean; // has the Foodies list been loaded
  error?: string | null; // last known error (if any)
}

export interface FoodiesPartialState {
  readonly [FOODIES_FEATURE_KEY]: FoodiesState;
}

export const foodiesAdapter: EntityAdapter<Foodie> = createEntityAdapter<Foodie>();

export const initialFoodiesState: FoodiesState = foodiesAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state, { error }) => ({ ...state, error });

const _foodiesReducer = createReducer(
  initialFoodiesState,
  on(FoodiesActions.selectFoodie, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(FoodiesActions.resetSelectedFoodie, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(FoodiesActions.resetFoodies, (state) => foodiesAdapter.removeAll(state)),
  // Load foodies
  on(FoodiesActions.loadFoodies, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(FoodiesActions.loadFoodiesSuccess, (state, { foodies }) =>
    foodiesAdapter.setAll(foodies, { ...state, loaded: true })
  ),
  on(FoodiesActions.loadFoodiesFailure, onFailure),
  // Load foodie
  on(FoodiesActions.loadFoodie, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(FoodiesActions.loadFoodieSuccess, (state, { foodie }) =>
    foodiesAdapter.upsertOne(foodie, { ...state, loaded: true })
  ),
  on(FoodiesActions.loadFoodieFailure, onFailure),
  // Add foodie
  on(FoodiesActions.createFoodieSuccess, (state, { foodie }) =>
    foodiesAdapter.addOne(foodie, state)
  ),
  on(FoodiesActions.createFoodieFailure, onFailure),
  // Update foodie
  on(FoodiesActions.updateFoodieSuccess, (state, { foodie }) =>
    foodiesAdapter.updateOne({ id: foodie.id, changes: foodie }, state)
  ),
  on(FoodiesActions.updateFoodieFailure, onFailure),
  // Delete foodie
  on(FoodiesActions.deleteFoodieSuccess, (state, { foodie }) =>
    foodiesAdapter.removeOne(foodie.id, state)
  ),
  on(FoodiesActions.deleteFoodieFailure, onFailure)
);

export function foodiesReducer(
  state: FoodiesState | undefined,
  action: Action
) {
  return _foodiesReducer(state, action);
}
