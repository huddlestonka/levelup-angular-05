import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Foodie } from '@bba/api-interfaces';

@Component({
  selector: 'bba-foodies-list',
  templateUrl: './foodies-list.component.html',
  styleUrls: ['./foodies-list.component.scss'],
})
export class FoodiesListComponent {
  @Input() foodies: Foodie[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
