import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { InscriptionConnexionComponent } from './inscription-connexion/inscription-connexion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GamePageComponent } from './game-page/game-page.component';
import { RestaurantMapComponent } from './restaurant-map/restaurant-map.component';
import { TerraceMapComponent } from './terrace-map/terrace-map.component';

const routes: Routes = [
  //page Game
  {
    path: 'game',
    component: GamePageComponent,
    children: [
      { path: 'restaurant', component: RestaurantMapComponent },
      { path: 'terrace', component: TerraceMapComponent },
    ],
  },
  //page Acceuil
  { path: '', component: InscriptionConnexionComponent },
  //page Not found
  { path: '**', component: NotFoundComponent },
  { path: 'store', component: StoreComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
