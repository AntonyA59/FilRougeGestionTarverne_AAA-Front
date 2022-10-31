import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { InscriptionConnexionComponent } from './inscription-connexion/inscription-connexion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GamePageComponent } from './game-page/game-page.component';
import { RestaurantMapComponent } from './restaurant-map/restaurant-map.component';
import { TerraceMapComponent } from './terrace-map/terrace-map.component';
import { CuisineMapComponent } from './cuisine-map/cuisine-map.component';
import { StoreMapComponent } from './store-map/store-map.component';

const routes: Routes = [
  //page Game
  {path:'game', component:GamePageComponent,
    children:[
      {path:'grandeSalle',component:RestaurantMapComponent},
      {path:'cuisine',component:CuisineMapComponent},
      {path:'terrace', component:TerraceMapComponent},
      {path:'store', component:StoreMapComponent}
    ]
},
  //page Acceuil
  {path:'', component:InscriptionConnexionComponent},
  //page Not found
  {path:'**', component:NotFoundComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
