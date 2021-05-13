import { Meal } from '@bba/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedMeal = createAction('[Meals] Reset Selected Meal');
export const resetMeals = createAction('[Meals] Reset Meals');

// Select Meal
export const selectMeal = createAction(
  '[Meals] Select Meal',
  props<{ selectedId: string }>()
);

// Load Meals
export const loadMeals = createAction('[Meals] Load Meals');

export const loadMealsSuccess = createAction(
  '[Meals] Load Meals Success',
  props<{ meals: Meal[] }>()
);

export const loadMealsFailure = createAction(
  '[Meals] Load Meals Failure',
  props<{ error: any }>()
);

// Load Meal
export const loadMeal = createAction(
  '[Meals] Load Meal',
  props<{ mealId: string }>()
);

export const loadMealSuccess = createAction(
  '[Meals] Load Meal Success',
  props<{ meal: Meal }>()
);

export const loadMealFailure = createAction(
  '[Meals] Load Meal Failure',
  props<{ error: any }>()
);

// Create Meal
export const createMeal = createAction(
  '[Meals] Create Meal',
  props<{ meal: Meal }>()
);

export const createMealSuccess = createAction(
  '[Meals] Create Meal Success',
  props<{ meal: Meal }>()
);

export const createMealFailure = createAction(
  '[Meals] Create Meal Failure',
  props<{ error: any }>()
);

// Update Meal
export const updateMeal = createAction(
  '[Meals] Update Meal',
  props<{ meal: Meal }>()
);

export const updateMealSuccess = createAction(
  '[Meals] Update Meal Success',
  props<{ meal: Meal }>()
);

export const updateMealFailure = createAction(
  '[Meals] Update Meal Failure',
  props<{ error: any }>()
);

// Delete Meal
export const deleteMeal = createAction(
  '[Meals] Delete Meal',
  props<{ meal: Meal }>()
);

export const deleteMealCancelled = createAction(
  '[Meals] Delete Meal Cancelled'
);

export const deleteMealSuccess = createAction(
  '[Meals] Delete Meal Success',
  props<{ meal: Meal }>()
);

export const deleteMealFailure = createAction(
  '[Meals] Delete Meal Failure',
  props<{ error: any }>()
);
