import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { CoreDataModule } from '@bba/core-data';
import { CoreStateModule, FoodiesFacade } from '@bba/core-state';
import { MaterialModule } from '@bba/material';

import { FoodieDetailsComponent } from './foodie-details/foodie-details.component';
import { FoodiesListComponent } from './foodies-list/foodies-list.component';
import { FoodiesComponent } from './foodies.component';

import { mockFoodie, mockEmptyFoodie } from '@bba/testing';

describe('FoodiesComponent', () => {
  let component: FoodiesComponent;
  let fixture: ComponentFixture<FoodiesComponent>;
  let de: DebugElement;
  let foodiesFacade: FoodiesFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FoodiesComponent,
        FoodieDetailsComponent,
        FoodiesListComponent,
      ],
      imports: [
        CoreDataModule,
        CoreStateModule,
        FormsModule,
        MaterialModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodiesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    foodiesFacade = TestBed.inject(FoodiesFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on select call foodiesFacade selectFoodie', () => {
    const spy = jest.spyOn(foodiesFacade, 'selectFoodie');

    component.selectFoodie(mockFoodie);

    expect(spy).toHaveBeenCalledWith(mockFoodie.id);
  });

  describe('should on save call foodiesFacade', () => {
    it('updateFoodie', () => {
      const spy = jest.spyOn(foodiesFacade, 'updateFoodie');

      component.saveFoodie(mockFoodie);

      expect(spy).toHaveBeenCalledWith(mockFoodie);
    });

    it('createFoodie', () => {
      const spy = jest.spyOn(foodiesFacade, 'createFoodie');

      component.saveFoodie(mockEmptyFoodie);

      expect(spy).toHaveBeenCalledWith(mockEmptyFoodie);
    });
  });

  it('should on delete call foodiesFacade deleteFoodie', () => {
    const spy = jest.spyOn(foodiesFacade, 'deleteFoodie');

    component.deleteFoodie(mockFoodie);

    expect(spy).toHaveBeenCalledWith(mockFoodie);
  });
});
