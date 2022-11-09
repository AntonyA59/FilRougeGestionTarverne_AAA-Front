import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { ManagerModel } from 'src/app/interfaces/manager';
import { Recipe, RecipeCustomerInventoryIngredientModel } from 'src/app/interfaces/recipe';
import { CustomerManagementService }from '../customerManagement/customer-management.service'
import { InventoryManagerService } from '../inventoryManager/inventory-manager.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private listRecipe= new BehaviorSubject<Recipe[]>([] as Recipe[]);
  listRecipe$=this.listRecipe.asObservable();
  

  urlRequestRecipe="localhost:8080/api/game/recipe/requestRecipe";

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http:HttpClient,private customerManagementService:CustomerManagementService,private inventoryManager:InventoryManagerService) { }

  setListRecipe(newListRecipe:Recipe[]):void{
    this.listRecipe.next(newListRecipe);
  }
  requestRecipe(manager:ManagerModel,recipe:Recipe,customer:Customer){
    const body= JSON.parse(`{"managerId":${manager.id},"recipeId":${recipe.id},"customerId":${customer.id}}`)
    this.http.post<RecipeCustomerInventoryIngredientModel>(this.urlRequestRecipe,body ,this.httpOptions).subscribe((recipeCustomerInventory)=>{
      this.customerManagementService.updateCustomer(customer,recipeCustomerInventory.customer);
      this.inventoryManager.setInventaireSave(recipeCustomerInventory.inventaire);
      //a voir pour lancer un compteur
    });
  }
}
