import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import {
  IngredientModel,
  IngredientQuantity,
} from 'src/app/interfaces/ingredient';
import { RecipeModel, RequestRecipeDto } from 'src/app/interfaces/recipe';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { TableRestService } from 'src/app/services/tableRest/tableRest.service';

@Component({
  selector: 'app-cuisine-map',
  templateUrl: './kitchen-map.component.html',
  styleUrls: ['./kitchen-map.component.css'],
})
export class KitchenMapComponent implements OnInit {
  sub: Subscription = new Subscription();
  customers: Customer[] = [];
  ingredients: IngredientModel[] = [];
  inventory: IngredientQuantity[] = [];
  recipes: RecipeModel[] = [];
  ingredientsRecipe: IngredientModel[] = [];
  requestRecipeDto = {} as RequestRecipeDto;
  numberNothing: number[] = [1, 1, 1, 1];
  recipeSelected = {} as RecipeModel;
  customerIdSelected: number = 0;
  ingredientsQuantityAvailable: number[] = [];
  textdark = 'text-dark';
  textred = 'text-danger';
  recipeReady = false;
  customerChoosing = false;

  constructor(private recipesService: RecipeService) {}

  ngOnInit(): void {
    this.sub = this.recipesService.recipes$.subscribe((recipes) => {
      this.recipes = recipes;
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
      this.customerIdSelected = parseInt(event.target.value);
      this.customerChoosing = true;
    } else {
      this.customerIdSelected = 0;
      this.customerChoosing = false;
    }
  }
  commitRecipe() {
    if (this.customerChoosing == true && this.recipeSelected != undefined) {
      this.requestRecipeDto.customerId = this.customerIdSelected;
      this.requestRecipeDto.recipeId = this.recipeSelected.id;
      this.requestRecipeDto.managerId = 1;

      // envoi du Post avec comme argument this.requestRecipeDto ;
      if (true) {
      } else {
        //erreur venant du back
      }
    }
  }
}
