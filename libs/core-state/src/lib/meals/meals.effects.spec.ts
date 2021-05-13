import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { MealsEffects } from './meals.effects';
import * as MealsActions from './meals.actions';

describe('MealsEffects', () => {
  let actions: Observable<any>;
  let effects: MealsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        MealsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(MealsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: MealsActions.init() });

      const expected = hot('-a-|', {
        a: MealsActions.loadMealsSuccess({ meals: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
