import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuisineMapComponent } from './cuisine-map/cuisine-map.component';
import { RestaurantMapComponent } from './restaurant-map/restaurant-map.component';
import { StoreMapComponent } from './store-map/store-map.component';
import { TerraceMapComponent } from './terrace-map/terrace-map.component';

const routes: Routes = [
  { path: 'grandeSalle', component: RestaurantMapComponent },
  { path: 'cuisine', component: CuisineMapComponent },
  { path: 'terrace', component: TerraceMapComponent },
  { path: 'store', component: StoreMapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
