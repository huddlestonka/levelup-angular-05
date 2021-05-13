import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromFoodies from './foodies/foodies.reducer';
import { FoodiesEffects } from './foodies/foodies.effects';
import { FoodiesFacade } from './foodies/foodies.facade';
import * as fromMeals from './meals/meals.reducer';
import { MealsEffects } from './meals/meals.effects';
import { MealsFacade } from './meals/meals.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromFoodies.FOODIES_FEATURE_KEY,
      fromFoodies.reducer
    ),
    EffectsModule.forFeature([FoodiesEffects]),
    StoreModule.forFeature(fromMeals.MEALS_FEATURE_KEY, fromMeals.reducer),
    EffectsModule.forFeature([MealsEffects]),
  ],
  providers: [FoodiesFacade, MealsFacade],
})
export class CoreStateModule {}
