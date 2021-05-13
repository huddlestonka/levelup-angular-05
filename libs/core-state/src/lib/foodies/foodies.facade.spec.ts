import { TestBed } from '@angular/core/testing';
import { ActionsSubject } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { FoodiesFacade } from './foodies.facade';
import * as FoodiesActions from './foodies.actions';
import { initialFoodiesState } from './foodies.reducer';

import { mockFoodie } from '@bba/testing';

describe('FoodiesFacade', () => {
  let facade: FoodiesFacade;
  let actionSubject;
  const mockActionsSubject = new ActionsSubject();
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FoodiesFacade,
        provideMockStore({ initialState: initialFoodiesState }),
        { provide: ActionsSubject, useValue: mockActionsSubject },
      ],
    });

    facade = TestBed.inject(FoodiesFacade);
    actionSubject = TestBed.inject(ActionsSubject);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should have mutations', (done) => {
    const action = FoodiesActions.createFoodie({ foodie: mockFoodie });
    actionSubject.next(action);

    facade.mutations$.subscribe((result) => {
      expect(result).toBe(action);
      done();
    });
  });

  describe('should dispatch', () => {
    it('select on select(foodie.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.selectFoodie(mockFoodie.id);

      const action = FoodiesActions.selectFoodie({
        selectedId: mockFoodie.id,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadFoodies on loadFoodies()', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadFoodies();

      const action = FoodiesActions.loadFoodies();

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadFoodie on loadFoodie(foodie.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadFoodie(mockFoodie.id);

      const action = FoodiesActions.loadFoodie({
        foodieId: mockFoodie.id,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('createFoodie on createFoodie(foodie)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.createFoodie(mockFoodie);

      const action = FoodiesActions.createFoodie({
        foodie: mockFoodie,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('updateFoodie on updateFoodie(foodie)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.updateFoodie(mockFoodie);

      const action = FoodiesActions.updateFoodie({
        foodie: mockFoodie,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('delete on delete(model)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.deleteFoodie(mockFoodie);

      const action = FoodiesActions.deleteFoodie({
        foodie: mockFoodie,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
