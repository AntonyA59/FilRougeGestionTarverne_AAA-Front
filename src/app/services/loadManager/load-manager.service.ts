import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadManager } from 'src/app/interfaces/load-manager';
import { environment } from 'src/environments/environment';
import { CategoriesSubcatgoriesService } from '../categories-subcatgories/categories-subcatgories.service';
import { IngredientsService } from '../ingredients/ingredients.service';
import { InventoryManagerService } from '../inventoryManager/inventory-manager.service';
import { ManagerService } from '../manager/manager.service';
import { PlacesService } from '../places/places.service';
import { RecipeService } from '../recipe/recipe.service';
import { TableRestService } from '../tableRest/tableRest.service';

@Injectable({
  providedIn: 'root',
})
export class LoadManagerService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
    }),
  };
  private urlLoadManager = environment.apiUrl + 'api/game/manager/loadManager';
  constructor(
    private http: HttpClient,
    private managerService: ManagerService,
    private categorieSubCategoriesService: CategoriesSubcatgoriesService,
    private ingredientsService: IngredientsService,
    private inventoryManagerService: InventoryManagerService,
    private placesServices: PlacesService,
    private recipesServices: RecipeService,
    private tableRestService: TableRestService
  ) {}

  loadManager(idManager: number) {
    const body = JSON.parse(`{"managerId": ${idManager}}`);
    this.http
      .post<LoadManager>(this.urlLoadManager, body, this.httpOptions)
      .subscribe((response) => {
        this.managerService.setManager(response.manager);
        this.categorieSubCategoriesService.setCategories(response.categories);
        this.categorieSubCategoriesService.setSubCategories(
          response.subCategories
        );
        this.ingredientsService.setIngredients(response.ingredients);
        this.inventoryManagerService.setInventaire(
          response.inventoryManagerIngredient
        );
        this.placesServices.setPlaces(response.places);
        this.recipesServices.setRecipes(response.recipes);
        this.tableRestService.setTables(response.tableRests);
      });
  }
}
