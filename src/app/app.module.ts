import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GameMapComponent } from './game-map/game-map.component';
import { AddManagerFormComponent } from './add-manager-form/add-manager-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConnectionComponent } from './connection/connection.component';
import { SelectManagerComponent } from './select-manager/select-manager.component';
import { PlayerMenuComponent } from './player-menu/player-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    GamePageComponent,
    GameMapComponent,
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
