import { createAction, props } from '@ngrx/store';
import { FoodiesEntity } from './foodies.models';

export const init = createAction('[Foodies Page] Init');

export const loadFoodiesSuccess = createAction(
  '[Foodies/API] Load Foodies Success',
  props<{ foodies: FoodiesEntity[] }>()
);

export const loadFoodiesFailure = createAction(
  '[Foodies/API] Load Foodies Failure',
  props<{ error: any }>()
);
