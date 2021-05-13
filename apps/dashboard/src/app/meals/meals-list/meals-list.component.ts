import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Meal } from '@bba/api-interfaces';

@Component({
  selector: 'bba-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.scss'],
})
export class MealsListComponent {
  @Input() meals: Meal[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
