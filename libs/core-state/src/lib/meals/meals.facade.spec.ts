import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { MealsEntity } from './meals.models';
import { MealsEffects } from './meals.effects';
import { MealsFacade } from './meals.facade';

import * as MealsSelectors from './meals.selectors';
import * as MealsActions from './meals.actions';
import {
  MEALS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './meals.reducer';

interface TestSchema {
  meals: State;
}

describe('MealsFacade', () => {
  let facade: MealsFacade;
  let store: Store<TestSchema>;
  const createMealsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as MealsEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(MEALS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([MealsEffects]),
        ],
        providers: [MealsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(MealsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allMeals$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allMeals$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadMealsSuccess` to manually update list
     */
    it('allMeals$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allMeals$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          MealsActions.loadMealsSuccess({
            meals: [createMealsEntity('AAA'), createMealsEntity('BBB')],
          })
        );

        list = await readFirst(facade.allMeals$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
