import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodiesRoutingModule } from './foodies-routing.module';
import { FoodiesComponent } from './foodies.component';
import { FoodieDetailsComponent } from './foodie-details/foodie-details.component';
import { FoodiesListComponent } from './foodies-list/foodies-list.component';
import { MaterialModule } from '@bba/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FoodiesComponent,
    FoodieDetailsComponent,
    FoodiesListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FoodiesRoutingModule,
    FormsModule,
    MaterialModule,
  ],
})
export class FoodiesModule {}
