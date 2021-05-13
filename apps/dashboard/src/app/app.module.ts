import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { FoodiesComponent } from './foodies/foodies.component';
import { FoodieDetailsComponent } from './foodies/foodie-details/foodie-details.component';
import { FoodiesListComponent } from './foodies/foodies-list/foodies-list.component';
import { MealsComponent } from './meals/meals.component';
import { MealDetailsComponent } from './meals/meal-details/meal-details.component';
import { MealsListComponent } from './meals/meals-list/meals-list.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '@bba/material';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FoodiesComponent,
    FoodieDetailsComponent,
    FoodiesListComponent,
    MealsComponent,
    MealDetailsComponent,
    MealsListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
