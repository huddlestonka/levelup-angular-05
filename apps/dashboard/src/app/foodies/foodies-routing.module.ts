import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodiesComponent } from './foodies.component';

const routes: Routes = [
  {
    path: '',
    component: FoodiesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodiesRoutingModule {}
