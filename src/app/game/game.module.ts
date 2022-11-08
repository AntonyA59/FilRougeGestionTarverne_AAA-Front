import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { KitchenMapComponent } from './kitchen-map/kitchen-map.component';
import { RestaurantMapComponent } from './restaurant-map/restaurant-map.component';
import { TerraceMapComponent } from './terrace-map/terrace-map.component';
import { StoreMapComponent } from './store-map/store-map.component';
import { CustomerManagerComponent } from '../customer-manager/customer-manager.component';

@NgModule({
  declarations: [
    KitchenMapComponent,
    RestaurantMapComponent,
    TerraceMapComponent,
    StoreMapComponent,
    CustomerManagerComponent,
  ],
  imports: [CommonModule, GameRoutingModule],
})
export class GameModule {}
