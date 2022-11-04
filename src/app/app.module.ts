import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StoreComponent } from './store/store.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GameMapComponent } from './game-map/game-map.component';
import { RestaurantMapComponent } from './restaurant-map/restaurant-map.component';
import { TerraceMapComponent } from './terrace-map/terrace-map.component';
import { CuisineMapComponent } from './cuisine-map/cuisine-map.component';
import { StoreMapComponent } from './store-map/store-map.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConnectionComponent } from './connection/connection.component';
import { SelectManagerComponent } from './select-manager/select-manager.component';
import { PlayerMenuComponent } from './player-menu/player-menu.component';
import { AddManagerFormComponent } from './add-manager-form/add-manager-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    HeaderComponent,
    NotFoundComponent,
    GamePageComponent,
    GameMapComponent,
    RestaurantMapComponent,
    TerraceMapComponent,
    CuisineMapComponent,
    StoreMapComponent,
    RegistrationComponent,
    HomePageComponent,
    RegistrationComponent,
    ConnectionComponent,
    SelectManagerComponent,
    PlayerMenuComponent,
    AddManagerFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
