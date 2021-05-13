import { Injectable } from '@angular/core';
import { Foodie } from '@bba/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { getFoodieMeals } from '..';
import * as FoodiesActions from './foodies.actions';
import * as fromFoodies from './foodies.reducer';
import * as FoodiesSelectors from './foodies.selectors';

@Injectable({
  providedIn: 'root',
})
export class FoodiesFacade {
  loaded$ = this.store.pipe(select(FoodiesSelectors.getFoodiesLoaded));
  allFoodies$ = this.store.pipe(select(FoodiesSelectors.getAllFoodies));
  selectedFoodie$ = this.store.pipe(select(FoodiesSelectors.getSelectedFoodie));
  foodieMeals$ = this.store.pipe(select(getFoodieMeals));

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === FoodiesActions.createFoodie({} as any).type ||
        action.type === FoodiesActions.updateFoodie({} as any).type ||
        action.type === FoodiesActions.deleteFoodie({} as any).type
    )
  );

  constructor(
    private store: Store<fromFoodies.FoodiesPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectFoodie(selectedId: string) {
    this.dispatch(FoodiesActions.selectFoodie({ selectedId }));
  }

  loadFoodies() {
    this.dispatch(FoodiesActions.loadFoodies());
  }

  loadFoodie(foodieId: string) {
    this.dispatch(FoodiesActions.loadFoodie({ foodieId }));
  }

  createFoodie(foodie: Foodie) {
    this.dispatch(
      FoodiesActions.createFoodie({
        foodie: Object.assign({}, foodie, { id: uuidv4() }),
      })
    );
  }

  updateFoodie(foodie: Foodie) {
    this.dispatch(FoodiesActions.updateFoodie({ foodie }));
  }

  deleteFoodie(foodie: Foodie) {
    this.dispatch(FoodiesActions.deleteFoodie({ foodie }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
