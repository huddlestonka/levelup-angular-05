import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { FoodiesEntity } from './foodies.models';
import { FoodiesEffects } from './foodies.effects';
import { FoodiesFacade } from './foodies.facade';

import * as FoodiesSelectors from './foodies.selectors';
import * as FoodiesActions from './foodies.actions';
import {
  FOODIES_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './foodies.reducer';

interface TestSchema {
  foodies: State;
}

describe('FoodiesFacade', () => {
  let facade: FoodiesFacade;
  let store: Store<TestSchema>;
  const createFoodiesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as FoodiesEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(FOODIES_FEATURE_KEY, reducer),
          EffectsModule.forFeature([FoodiesEffects]),
        ],
        providers: [FoodiesFacade],
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
      facade = TestBed.inject(FoodiesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allFoodies$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allFoodies$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadFoodiesSuccess` to manually update list
     */
    it('allFoodies$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allFoodies$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          FoodiesActions.loadFoodiesSuccess({
            foodies: [createFoodiesEntity('AAA'), createFoodiesEntity('BBB')],
          })
        );

        list = await readFirst(facade.allFoodies$);
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
