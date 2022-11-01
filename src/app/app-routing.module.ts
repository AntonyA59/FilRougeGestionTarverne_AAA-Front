import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { ConnectionComponent } from './connection/connection.component';
import { RegistrationComponent } from './registration/registration.component';
import { SelectManagerComponent } from './select-manager/select-manager.component';
import { PlayerMenuComponent } from './player-menu/player-menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/connexion', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent,

    children: [
      {
        path: 'connexion',
        component: ConnectionComponent,
      },
      { path: 'inscription', component: RegistrationComponent },
      { path: 'manager/select', component: SelectManagerComponent },
      { path: 'menu', component: PlayerMenuComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
