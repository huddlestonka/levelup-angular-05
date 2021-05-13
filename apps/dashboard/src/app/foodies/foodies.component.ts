import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Foodie } from '@bba/api-interfaces';
import { FoodiesFacade } from '@bba/core-state';

@Component({
  selector: 'bba-foodies',
  templateUrl: './foodies.component.html',
  styleUrls: ['./foodies.component.scss'],
})
export class FoodiesComponent implements OnInit {
  foodies$: Observable<Foodie[]> = this.foodiesFacade.allFoodies$;
  selectedFoodie$: Observable<Foodie> = this.foodiesFacade.selectedFoodie$;

  constructor(private foodiesFacade: FoodiesFacade) {}

  ngOnInit(): void {
    this.loadFoodies();
    this.foodiesFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadFoodies();
    this.foodiesFacade.selectFoodie(null);
  }

  resetForm() {
    this.foodiesFacade.selectFoodie(null);
  }

  loadFoodies() {
    this.foodiesFacade.loadFoodies();
  }

  selectFoodie(foodie: Foodie) {
    this.foodiesFacade.selectFoodie(foodie.id);
  }

  saveFoodie(foodie: Foodie) {
    if (foodie.id) {
      this.foodiesFacade.updateFoodie(foodie);
    } else {
      this.foodiesFacade.createFoodie(foodie);
    }
  }

  deleteFoodie(foodie: Foodie) {
    this.foodiesFacade.deleteFoodie(foodie);
  }
}
