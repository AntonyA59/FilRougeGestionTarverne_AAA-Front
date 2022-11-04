import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { GamePageComponent } from './game-page/game-page.component';
import { RestaurantMapComponent } from './restaurant-map/restaurant-map.component';
import { TerraceMapComponent } from './terrace-map/terrace-map.component';
import { CuisineMapComponent } from './cuisine-map/cuisine-map.component';
import { StoreMapComponent } from './store-map/store-map.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConnectionComponent } from './connection/connection.component';
import { RegistrationComponent } from './registration/registration.component';
import { SelectManagerComponent } from './select-manager/select-manager.component';
import { PlayerMenuComponent } from './player-menu/player-menu.component';
import { AddManagerFormComponent } from './add-manager-form/add-manager-form.component';

const routes: Routes = [
  //page Game
  { path: 'game', redirectTo: '/game/grandeSalle', pathMatch: 'full' },

  {
    path: 'game',
    component: GamePageComponent,
    children: [
      { path: 'grandeSalle', component: RestaurantMapComponent },
      { path: 'cuisine', component: CuisineMapComponent },
      { path: 'terrace', component: TerraceMapComponent },
      { path: 'store', component: StoreMapComponent },
    ],
  },
  //page Acceuil
  { path: '', redirectTo: '/home/connexion', pathMatch: 'full' },
  { path: 'home', redirectTo: '/home/connexion', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent,

    children: [
      {
        path: 'connexion',
        component: ConnectionComponent,
      },
      { path: 'inscription', component: RegistrationComponent },
      { path: 'menu', component: PlayerMenuComponent },
      { path: 'manager/select', component: SelectManagerComponent },
      { path: 'manager/add', component: AddManagerFormComponent },
    ],
  },
  //page Not found
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
