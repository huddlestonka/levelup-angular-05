import { Injectable } from '@angular/core';
import { Foodie } from '@bba/api-interfaces';
import { FoodiesService } from '@bba/core-data';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import * as FoodiesActions from './foodies.actions';

@Injectable()
export class FoodiesEffects {
  @Effect() loadFoodies$ = this.actions$.pipe(
    ofType(FoodiesActions.loadFoodies),
    fetch({
      run: (action) =>
        this.foodiesService
          .all()
          .pipe(
            map((foodies: Foodie[]) =>
              FoodiesActions.loadFoodiesSuccess({ foodies })
            )
          ),
      onError: (action, error) => FoodiesActions.loadFoodiesFailure({ error }),
    })
  );

  @Effect() loadFoodie$ = this.actions$.pipe(
    ofType(FoodiesActions.loadFoodie),
    fetch({
      run: (action) =>
        this.foodiesService
          .find(action.foodieId)
          .pipe(
            map((foodie: Foodie) =>
              FoodiesActions.loadFoodieSuccess({ foodie })
            )
          ),
      onError: (action, error) => FoodiesActions.loadFoodieFailure({ error }),
    })
  );

  @Effect() createFoodie$ = this.actions$.pipe(
    ofType(FoodiesActions.createFoodie),
    pessimisticUpdate({
      run: (action) =>
        this.foodiesService
          .create(action.foodie)
          .pipe(
            map((foodie: Foodie) =>
              FoodiesActions.createFoodieSuccess({ foodie })
            )
          ),
      onError: (action, error) => FoodiesActions.createFoodieFailure({ error }),
    })
  );

  @Effect() updateFoodie$ = this.actions$.pipe(
    ofType(FoodiesActions.updateFoodie),
    pessimisticUpdate({
      run: (action) =>
        this.foodiesService
          .update(action.foodie)
          .pipe(
            map((foodie: Foodie) =>
              FoodiesActions.updateFoodieSuccess({ foodie })
            )
          ),
      onError: (action, error) => FoodiesActions.updateFoodieFailure({ error }),
    })
  );

  @Effect() deleteFoodie$ = this.actions$.pipe(
    ofType(FoodiesActions.deleteFoodie),
    pessimisticUpdate({
      run: (action) =>
        this.foodiesService
          .delete(action.foodie)
          .pipe(
            map((foodie: Foodie) =>
              FoodiesActions.deleteFoodieSuccess({ foodie })
            )
          ),
      onError: (action, error) => FoodiesActions.deleteFoodieFailure({ error }),
    })
  );

  constructor(
    private actions$: Actions,
    private foodiesService: FoodiesService
  ) {}
}
