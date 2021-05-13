import { Injectable } from '@angular/core';
import { Meal } from '@bba/api-interfaces';
import { MealsService } from '@bba/core-data';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import * as MealsActions from './meals.actions';

@Injectable()
export class MealsEffects {
  @Effect() loadMeals$ = this.actions$.pipe(
    ofType(MealsActions.loadMeals),
    fetch({
      run: (action) =>
        this.mealsService
          .all()
          .pipe(
            map((meals: Meal[]) => MealsActions.loadMealsSuccess({ meals }))
          ),
      onError: (action, error) => MealsActions.loadMealsFailure({ error }),
    })
  );

  @Effect() loadMeal$ = this.actions$.pipe(
    ofType(MealsActions.loadMeal),
    fetch({
      run: (action) =>
        this.mealsService
          .find(action.mealId)
          .pipe(map((meal: Meal) => MealsActions.loadMealSuccess({ meal }))),
      onError: (action, error) => MealsActions.loadMealFailure({ error }),
    })
  );

  @Effect() createMeal$ = this.actions$.pipe(
    ofType(MealsActions.createMeal),
    pessimisticUpdate({
      run: (action) =>
        this.mealsService
          .create(action.meal)
          .pipe(map((meal: Meal) => MealsActions.createMealSuccess({ meal }))),
      onError: (action, error) => MealsActions.createMealFailure({ error }),
    })
  );

  @Effect() updateMeal$ = this.actions$.pipe(
    ofType(MealsActions.updateMeal),
    pessimisticUpdate({
      run: (action) =>
        this.mealsService
          .update(action.meal)
          .pipe(map((meal: Meal) => MealsActions.updateMealSuccess({ meal }))),
      onError: (action, error) => MealsActions.updateMealFailure({ error }),
    })
  );

  @Effect() deleteMeal$ = this.actions$.pipe(
    ofType(MealsActions.deleteMeal),
    pessimisticUpdate({
      run: (action) =>
        this.mealsService
          .delete(action.meal)
          .pipe(map((meal: Meal) => MealsActions.deleteMealSuccess({ meal }))),
      onError: (action, error) => MealsActions.deleteMealFailure({ error }),
    })
  );

  constructor(private actions$: Actions, private mealsService: MealsService) {}
}
