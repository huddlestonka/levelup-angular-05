import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as FoodiesActions from './foodies.actions';
import * as FoodiesFeature from './foodies.reducer';
import * as FoodiesSelectors from './foodies.selectors';

@Injectable()
export class FoodiesFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(FoodiesSelectors.getFoodiesLoaded));
  allFoodies$ = this.store.pipe(select(FoodiesSelectors.getAllFoodies));
  selectedFoodies$ = this.store.pipe(select(FoodiesSelectors.getSelected));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(FoodiesActions.init());
  }
}
