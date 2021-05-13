import { Meal } from '@bba/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as MealsActions from './meals.actions';

export const MEALS_FEATURE_KEY = 'meals';

export interface MealsState extends EntityState<Meal> {
  selectedId?: string | number; // which Meals record has been selected
  loaded: boolean; // has the Meals list been loaded
  error?: string | null; // last known error (if any)
}

export interface MealsPartialState {
  readonly [MEALS_FEATURE_KEY]: MealsState;
}

export const mealsAdapter: EntityAdapter<Meal> = createEntityAdapter<Meal>();

export const initialMealsState: MealsState = mealsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const onFailure = (state, { error }) => ({ ...state, error });

const _mealsReducer = createReducer(
  initialMealsState,
  on(MealsActions.selectMeal, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(MealsActions.resetSelectedMeal, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(MealsActions.resetMeals, (state) => mealsAdapter.removeAll(state)),
  // Load meals
  on(MealsActions.loadMeals, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(MealsActions.loadMealsSuccess, (state, { meals }) =>
    mealsAdapter.setAll(meals, { ...state, loaded: true })
  ),
  on(MealsActions.loadMealsFailure, onFailure),
  // Load meal
  on(MealsActions.loadMeal, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(MealsActions.loadMealSuccess, (state, { meal }) =>
    mealsAdapter.upsertOne(meal, { ...state, loaded: true })
  ),
  on(MealsActions.loadMealFailure, onFailure),
  // Add meal
  on(MealsActions.createMealSuccess, (state, { meal }) =>
    mealsAdapter.addOne(meal, state)
  ),
  on(MealsActions.createMealFailure, onFailure),
  // Update meal
  on(MealsActions.updateMealSuccess, (state, { meal }) =>
    mealsAdapter.updateOne({ id: meal.id, changes: meal }, state)
  ),
  on(MealsActions.updateMealFailure, onFailure),
  // Delete meal
  on(MealsActions.deleteMealSuccess, (state, { meal }) =>
    mealsAdapter.removeOne(meal.id, state)
  ),
  on(MealsActions.deleteMealFailure, onFailure)
);

export function mealsReducer(state: MealsState | undefined, action: Action) {
  return _mealsReducer(state, action);
}
