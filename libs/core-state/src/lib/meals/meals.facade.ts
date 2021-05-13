import { Injectable } from '@angular/core';
import { Meal } from '@bba/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import * as MealsActions from './meals.actions';
import * as fromMeals from './meals.reducer';
import * as MealsSelectors from './meals.selectors';

@Injectable({
  providedIn: 'root',
})
export class MealsFacade {
  loaded$ = this.store.pipe(select(MealsSelectors.getMealsLoaded));
  allMeals$ = this.store.pipe(select(MealsSelectors.getAllMeals));
  selectedMeal$ = this.store.pipe(select(MealsSelectors.getSelectedMeal));

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === MealsActions.createMeal({} as any).type ||
        action.type === MealsActions.updateMeal({} as any).type ||
        action.type === MealsActions.deleteMeal({} as any).type
    )
  );

  constructor(
    private store: Store<fromMeals.MealsPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectMeal(selectedId: string) {
    this.dispatch(MealsActions.selectMeal({ selectedId }));
  }

  loadMeals() {
    this.dispatch(MealsActions.loadMeals());
  }

  loadMeal(mealId: string) {
    this.dispatch(MealsActions.loadMeal({ mealId }));
  }

  createMeal(meal: Meal) {
    this.dispatch(
      MealsActions.createMeal({
        meal: Object.assign({}, meal, { id: uuidv4() }),
      })
    );
  }

  updateMeal(meal: Meal) {
    this.dispatch(MealsActions.updateMeal({ meal }));
  }

  deleteMeal(meal: Meal) {
    this.dispatch(MealsActions.deleteMeal({ meal }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
