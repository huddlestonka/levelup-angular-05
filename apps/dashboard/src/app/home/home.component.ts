import { Component, OnInit } from '@angular/core';
import { FoodiesFacade, MealsFacade } from '@bba/core-state';

@Component({
  selector: 'bba-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  foodieMeals$ = this.foodiesFacade.foodieMeals$;

  constructor(
    private foodiesFacade: FoodiesFacade,
    private mealsFacade: MealsFacade
  ) {}

  ngOnInit(): void {
    this.foodiesFacade.loadFoodies();
    this.mealsFacade.loadMeals();
  }
}
