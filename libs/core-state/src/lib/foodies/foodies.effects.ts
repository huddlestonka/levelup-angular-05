import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as FoodiesFeature from './foodies.reducer';
import * as FoodiesActions from './foodies.actions';

@Injectable()
export class FoodiesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FoodiesActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return FoodiesActions.loadFoodiesSuccess({ foodies: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return FoodiesActions.loadFoodiesFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
