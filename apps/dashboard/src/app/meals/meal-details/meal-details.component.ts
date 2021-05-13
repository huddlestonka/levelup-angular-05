import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Foodie, Meal } from '@bba/api-interfaces';

@Component({
  selector: 'bba-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss'],
})
export class MealDetailsComponent {
  currentMeal: Meal;
  originalTitle = '';
  @Input() foodies: Foodie[];
  @Input() set meal(value: Meal) {
    if (value) this.originalTitle = value.title;
    this.currentMeal = { ...value };
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
