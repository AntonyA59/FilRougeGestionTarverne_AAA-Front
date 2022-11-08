import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { ManagerModel } from 'src/app/interfaces/manager';
import { Recipe } from 'src/app/interfaces/recipe';

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
  constructor(private http:HttpClient) { }

  setListRecipe(newListRecipe:Recipe[]):void{
    this.listRecipe.next(newListRecipe);
  }
  requestRecipe(manager:ManagerModel,recipe:Recipe,customer:Customer){
    const body= JSON.parse(`{"managerId":${manager.id},"recipeId":${recipe.id},"customerId":${customer.id}}`)
    this.http.post<>(this.urlRequestRecipe,body ,this.httpOptions);
  }
}
