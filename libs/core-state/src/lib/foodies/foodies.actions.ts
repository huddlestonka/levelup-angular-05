import { Foodie } from '@bba/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedFoodie = createAction(
  '[Foodies] Reset Selected Foodie'
);
export const resetFoodies = createAction('[Foodies] Reset Foodies');

// Select Foodie
export const selectFoodie = createAction(
  '[Foodies] Select Foodie',
  props<{ selectedId: string }>()
);

// Load Foodies
export const loadFoodies = createAction('[Foodies] Load Foodies');

export const loadFoodiesSuccess = createAction(
  '[Foodies] Load Foodies Success',
  props<{ foodies: Foodie[] }>()
);

export const loadFoodiesFailure = createAction(
  '[Foodies] Load Foodies Failure',
  props<{ error: any }>()
);

// Load Foodie
export const loadFoodie = createAction(
  '[Foodies] Load Foodie',
  props<{ foodieId: string }>()
);

export const loadFoodieSuccess = createAction(
  '[Foodies] Load Foodie Success',
  props<{ foodie: Foodie }>()
);

export const loadFoodieFailure = createAction(
  '[Foodies] Load Foodie Failure',
  props<{ error: any }>()
);

// Create Foodie
export const createFoodie = createAction(
  '[Foodies] Create Foodie',
  props<{ foodie: Foodie }>()
);

export const createFoodieSuccess = createAction(
  '[Foodies] Create Foodie Success',
  props<{ foodie: Foodie }>()
);

export const createFoodieFailure = createAction(
  '[Foodies] Create Foodie Failure',
  props<{ error: any }>()
);

// Update Foodie
export const updateFoodie = createAction(
  '[Foodies] Update Foodie',
  props<{ foodie: Foodie }>()
);

export const updateFoodieSuccess = createAction(
  '[Foodies] Update Foodie Success',
  props<{ foodie: Foodie }>()
);

export const updateFoodieFailure = createAction(
  '[Foodies] Update Foodie Failure',
  props<{ error: any }>()
);

// Delete Foodie
export const deleteFoodie = createAction(
  '[Foodies] Delete Foodie',
  props<{ foodie: Foodie }>()
);

export const deleteFoodieCancelled = createAction(
  '[Foodies] Delete Foodie Cancelled'
);

export const deleteFoodieSuccess = createAction(
  '[Foodies] Delete Foodie Success',
  props<{ foodie: Foodie }>()
);

export const deleteFoodieFailure = createAction(
  '[Foodies] Delete Foodie Failure',
  props<{ error: any }>()
);
