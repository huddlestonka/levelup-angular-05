import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Foodie } from '@bba/api-interfaces';

@Component({
  selector: 'bba-foodie-details',
  templateUrl: './foodie-details.component.html',
  styleUrls: ['./foodie-details.component.scss'],
})
export class FoodieDetailsComponent {
  currentFoodie: Foodie;
  originalTitle = '';
  @Input() set foodie(value: Foodie) {
    if (value) this.originalTitle = `${value.firstName} ${value.lastName}`;
    this.currentFoodie = { ...value };
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
