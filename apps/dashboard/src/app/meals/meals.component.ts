import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Foodie, Meal } from '@bba/api-interfaces';
import { FoodiesFacade, MealsFacade } from '@bba/core-state';

@Component({
  selector: 'bba-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit {
  meals$: Observable<Meal[]> = this.mealsFacade.allMeals$;
  foodies$: Observable<Foodie[]> = this.foodiesFacade.allFoodies$;
  selectedMeal$ = this.mealsFacade.selectedMeal$;

  constructor(
    private mealsFacade: MealsFacade,
    private foodiesFacade: FoodiesFacade
  ) {}

  ngOnInit(): void {
    this.reset();
    this.mealsFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadMeals();
    this.loadFoodies();
    this.mealsFacade.selectMeal(null);
  }

  resetForm() {
    this.mealsFacade.selectMeal(null);
  }

  loadMeals() {
    this.mealsFacade.loadMeals();
  }

  loadFoodies() {
    this.foodiesFacade.loadFoodies();
  }

  selectMeal(meal: Meal) {
    this.mealsFacade.selectMeal(meal.id);
  }

  saveMeal(meal: Meal) {
    if (meal.id) {
      this.mealsFacade.updateMeal(meal);
    } else {
      this.mealsFacade.createMeal(meal);
    }
  }

  deleteMeal(meal: Meal) {
    this.mealsFacade.deleteMeal(meal);
  }
}
