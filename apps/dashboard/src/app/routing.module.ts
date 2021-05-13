import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodiesComponent } from './foodies/foodies.component';
import { HomeComponent } from './home/home.component';
import { MealsComponent } from './meals/meals.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'meals', component: MealsComponent },
  { path: 'foodies', component: FoodiesComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
