import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsRoutingModule } from './meals-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MealsComponent } from './meals.component';
import { MealsListComponent } from './meals-list/meals-list.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { MaterialModule } from '@bba/material';

@NgModule({
  declarations: [MealsComponent, MealsListComponent, MealDetailsComponent],
  imports: [
    CommonModule,
    MealsRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
  ],
})
export class MealsModule {}
