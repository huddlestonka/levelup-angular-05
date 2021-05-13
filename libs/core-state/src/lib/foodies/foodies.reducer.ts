import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as FoodiesActions from './foodies.actions';
import { FoodiesEntity } from './foodies.models';

export const FOODIES_FEATURE_KEY = 'foodies';

export interface State extends EntityState<FoodiesEntity> {
  selectedId?: string | number; // which Foodies record has been selected
  loaded: boolean; // has the Foodies list been loaded
  error?: string | null; // last known error (if any)
}

export interface FoodiesPartialState {
  readonly [FOODIES_FEATURE_KEY]: State;
}

export const foodiesAdapter: EntityAdapter<FoodiesEntity> = createEntityAdapter<FoodiesEntity>();

export const initialState: State = foodiesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const foodiesReducer = createReducer(
  initialState,
  on(FoodiesActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(FoodiesActions.loadFoodiesSuccess, (state, { foodies }) =>
    foodiesAdapter.setAll(foodies, { ...state, loaded: true })
  ),
  on(FoodiesActions.loadFoodiesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return foodiesReducer(state, action);
}
