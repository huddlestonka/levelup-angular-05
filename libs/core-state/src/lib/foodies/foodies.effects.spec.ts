import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { FoodiesEffects } from './foodies.effects';
import * as FoodiesActions from './foodies.actions';

describe('FoodiesEffects', () => {
  let actions: Observable<any>;
  let effects: FoodiesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        FoodiesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(FoodiesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: FoodiesActions.init() });

      const expected = hot('-a-|', {
        a: FoodiesActions.loadFoodiesSuccess({ foodies: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
