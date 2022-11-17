import { Component, OnInit } from '@angular/core';
import { catchError, forkJoin, of, shareReplay, Subscription } from 'rxjs';
import { CustomerModel } from 'src/app/interfaces/customer';
import {
  IngredientModel,
  IngredientQuantity,
} from 'src/app/interfaces/ingredient';
import { ManagerModel } from 'src/app/interfaces/manager';
import { RecipeModel, RequestRecipeDto } from 'src/app/interfaces/recipe';
import { CustomerManagementService } from 'src/app/services/customerManagement/customer-management.service';
import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';
import { InventoryManagerService } from 'src/app/services/inventoryManager/inventory-manager.service';
import { ManagerService } from 'src/app/services/manager/manager.service';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-cuisine-map',
  templateUrl: './kitchen-map.component.html',
  styleUrls: ['./kitchen-map.component.css'],
})
export class KitchenMapComponent implements OnInit {
  sub: Subscription = new Subscription();
  customers: CustomerModel[] = [];
  ingredients: IngredientModel[] = [];
  inventory: IngredientQuantity[] = [];
  recipes: RecipeModel[] = [];
  ingredientsRecipe: IngredientModel[] = [];
  numberNothing: number[] = [1, 1, 1, 1];
  recipeSelected = {} as RecipeModel;
  customerSelected = {} as CustomerModel;
  customerWithTable: CustomerModel[] = [];
  customerIndexSelected: number = 0;
  ingredientsQuantityAvailable: number[] = [];
  manager = {} as ManagerModel;
  textdark = 'text-dark';
  textred = 'text-danger';
  recipeReady = false;
  customerChoosing = false;

  obsInventory$ = this.inventoryManagerService.inventaireConnect$;
  obsCustomer$ = this.customerService.customers$;
  obsRecipes$ = this.recipesService.recipes$;
  obsIngredients$ = this.ingredientsService.ingredients$;
  obsManager$ = this.managerService.manager$;

  constructor(
    private recipesService: RecipeService,
    private ingredientsService: IngredientsService,
    private inventoryManagerService: InventoryManagerService,
    private customerService: CustomerManagementService,
    private managerService: ManagerService
  ) {}

  ngOnInit(): void {
    this.obsRecipes$.pipe(shareReplay());
    this.obsInventory$.pipe(shareReplay());
    this.obsIngredients$.pipe(shareReplay());
    this.obsCustomer$.pipe(shareReplay());

    this.sub = this.obsRecipes$.subscribe((recipes) => {
      this.recipes = recipes;
      console.log(this.recipes);
    });
    this.sub = this.obsInventory$.subscribe((inventory) => {
      this.inventory = inventory;
      console.log(this.inventory);
    });
    this.sub = this.obsIngredients$.subscribe((ingredients) => {
      this.ingredients = ingredients;
      console.log(this.ingredients);
    });
    this.sub = this.obsCustomer$.subscribe((customers) => {
      this.customers = customers;
      this.customers.forEach((customer) => {
        if (
          customer.idTableRest != null &&
          customer.consommationStart == null
        ) {
          this.customerWithTable.push(customer);
        }
      });
      console.log(this.customers);
    });
    this.sub = this.obsManager$.subscribe((manager) => {
      this.manager = manager;
      console.log(this.manager);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }
  selectRecipe(index: number) {
    let ingredient: IngredientQuantity | undefined;
    let nbIngredients = 0;

    if (
      this.recipeSelected != undefined &&
      this.recipeSelected.id != this.recipes[index].id
    ) {
      this.ingredientsRecipe = [];
      this.numberNothing = [];
      this.ingredientsQuantityAvailable = [];
      this.recipeSelected = this.recipes[index];
      this.recipeReady = true;

      this.recipeSelected.tabIngredientsForRecipe.forEach(
        (ingredientQuantity) => {
          ingredient = this.ingredients.find(
            (element) => element.id == ingredientQuantity.id
          );
          if (ingredient != undefined) {
            this.ingredientsRecipe.push(ingredient);
          }
          ingredient = this.inventory.find(
            (element) => element.id == ingredientQuantity.id
          );
          if (ingredient != undefined) {
            this.ingredientsQuantityAvailable.push(ingredient.quantity!);
          } else {
            this.ingredientsQuantityAvailable.push(0);
            this.recipeReady = false;
          }
          nbIngredients++;
        }
      );

      for (let index = 0; index < 4 - nbIngredients; index++) {
        this.numberNothing.push(1);
      }
    }
  }

  customerChange(event: Event): void {
    if (event.target instanceof HTMLSelectElement && event.target.value != '') {
      this.customerIndexSelected = parseInt(event.target.value);
      this.customerChoosing = true;
    } else {
      this.customerIndexSelected = 0;
      this.customerChoosing = false;
    }
  }

  commitRecipe() {
    if (this.customerChoosing == true && this.recipeSelected != undefined) {
      this.recipesService.requestRecipe(
        this.manager,
        this.recipeSelected,
        this.customers[this.customerIndexSelected]
      );
      // envoi du Post avec comme argument this.requestRecipeDto ;
      if (true) {
      } else {
        //erreur venant du back
      }
    }
  }
}
