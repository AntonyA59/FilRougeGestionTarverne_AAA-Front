import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { GamePageComponent } from './game-page/game-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SelectManagerComponent } from './select-manager/select-manager.component';
import { PlayerMenuComponent } from './player-menu/player-menu.component';
import { AddManagerFormComponent } from './add-manager-form/add-manager-form.component';

const routes: Routes = [
  //page Game
  //TODO gerer l'obligation d'être connecter pour pouvoir avoir acces à ces routes là !!
  { path: 'game', redirectTo: '/game/grandeSalle', pathMatch: 'full' },
  {
    path: 'game',
    component: GamePageComponent,
    loadChildren: () => import('./game/game.module').then((m) => m.GameModule),
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
        component: LoginComponent,
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
