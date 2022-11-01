import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConnectionComponent } from './connection/connection.component';
import { SelectManagerComponent } from './select-manager/select-manager.component';
import { PlayerMenuComponent } from './player-menu/player-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomePageComponent,
    RegistrationComponent,
    ConnectionComponent,
    SelectManagerComponent,
    PlayerMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
