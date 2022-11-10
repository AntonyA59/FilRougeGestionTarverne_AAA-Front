import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { ManagerModel } from 'src/app/interfaces/manager';
import {
  RecipeModel,
  RecipeCustomerInventoryIngredientModel,
} from 'src/app/interfaces/recipe';
import { environment } from 'src/environments/environment';
import { CustomerManagementService } from '../customerManagement/customer-management.service';
import { InventoryManagerService } from '../inventoryManager/inventory-manager.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes = new BehaviorSubject<RecipeModel[]>([] as RecipeModel[]);
  recipes$ = this.recipes.asObservable();

  urlRequestRecipe = environment.apiUrl+'api/game/recipe/requestRecipe';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(
    private http: HttpClient,
    private customerManagementService: CustomerManagementService,
    private inventoryManager: InventoryManagerService
  ) {}

  setRecipes(newRecipes: RecipeModel[]): void {
    this.recipes.next(newRecipes);
  }
  requestRecipe(
    manager: ManagerModel,
    recipe: RecipeModel,
    customer: Customer
  ) {
    const body = JSON.parse(
      `{"managerId":${manager.id},"recipeId":${recipe.id},"customerId":${customer.id}}`
    );
    this.http
      .post<RecipeCustomerInventoryIngredientModel>(
        this.urlRequestRecipe,
        body,
        this.httpOptions
      )
      .subscribe((recipeCustomerInventory) => {
        this.customerManagementService.updateCustomer(
          customer,
          recipeCustomerInventory.customer
        );
        this.inventoryManager.setInventaire(recipeCustomerInventory.inventaire);
        //a voir pour lancer un compteur
      });
  }
}
