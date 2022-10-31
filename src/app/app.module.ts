import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InscriptionConnexionComponent } from './inscription-connexion/inscription-connexion.component';
import { StoreComponent } from './store/store.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GameMapComponent } from './game-map/game-map.component';
import { RestaurantMapComponent } from './restaurant-map/restaurant-map.component';
import { TerraceMapComponent } from './terrace-map/terrace-map.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionConnexionComponent,
    StoreComponent,
    HeaderComponent,
    NotFoundComponent,
    GamePageComponent,
    GameMapComponent,
    RestaurantMapComponent,
    TerraceMapComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
