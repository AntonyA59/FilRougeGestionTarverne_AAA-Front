import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-cuisine-map',
  templateUrl: './cuisine-map.component.html',
  styleUrls: ['./cuisine-map.component.css'],
})
export class CuisineMapComponent implements OnInit {
  ingredients: Ingredient[] = [
    {
      id: 2,
      name: 'Gruit',
      level: 1,
      buyingPrice: 2,
      idSubCategory: 1,
    },
    {
      id: 6,
      name: 'Pomme Verte',
      level: 1,
      buyingPrice: 1,
      idSubCategory: 9,
    },
    {
      id: 8,
      name: 'Boulettes de Boeuf',
      level: 1,
      buyingPrice: 1,
      idSubCategory: 6,
    },
    {
      id: 10,
      name: 'Omelette aux Herbes',
      level: 1,
      buyingPrice: 1,
      idSubCategory: 6,
    },
    {
      id: 13,
      name: 'Blanc de Poulet',
      level: 1,
      buyingPrice: 1,
      idSubCategory: 6,
    },
    {
      id: 64,
      name: 'Bière',
      level: 1,
      buyingPrice: 1,
      idSubCategory: 64,
    },
    {
      id: 14,
      name: 'Cuisse de Boeuf',
      level: 1,
      buyingPrice: 1,
      idSubCategory: 6,
    },
    {
      id: 94,
      name: 'Pain',
      level: 1,
      buyingPrice: 3,
      idSubCategory: 6,
    },
  ];
  inventory: Ingredient[] = [
    {
      id: 64,
      name: 'Bière',
      level: 1,
      buyingPrice: 15,
      idSubCategory: 64,
      count: 18,
    },
    {
      id: 94,
      name: 'Pain',
      level: 1,
      buyingPrice: 3,
      idSubCategory: 6,
      count: 2,
    },
    {
      id: 14,
      name: 'Cuisse de Boeuf',
      level: 1,
      buyingPrice: 1,
      idSubCategory: 6,
      count: 1,
    },
  ];
  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Soupe de tomates',
      sellingPrice: 3,
      level: 1,
      consommationTime: 10,
      preparationTime: 0,
      peremptionDate: '',
      expGiven: 0,
      idSubCategory: 1,
      tabIngredientsForRecipe: [94],
    },
    {
      id: 2,
      name: 'Pommes de terre en sauce tomate au fromage',
      sellingPrice: 3,
      level: 1,
      consommationTime: 10,
      preparationTime: 0,
      peremptionDate: '',
      expGiven: 0,
      idSubCategory: 1,
      tabIngredientsForRecipe: [64, 10, 13, 14],
    },
  ];
  ingredientsRecipe: Ingredient[] = [];
  numberNothing: number[] = [1, 1, 1, 1, 1];
  recipeSelected = {} as Recipe;
  ingredientsQuantityAvailable: number[] = [];
  textdark = 'text-dark';
  textred = 'text-danger';
  recipeReady = false;

  constructor() {}

  ngOnInit(): void {}
  selectRecipe(index: number) {
    let ingredient: Ingredient | undefined;
    let nbIngredients = 0;

    if (this.recipeSelected.id != this.recipes[index].id) {
      this.ingredientsRecipe = [];
      this.numberNothing = [];
      this.ingredientsQuantityAvailable = [];
      this.recipeSelected = this.recipes[index];
      this.recipeReady = true;

      this.recipeSelected.tabIngredientsForRecipe.forEach((idIngredient) => {
        ingredient = this.ingredients.find(
          (element) => element.id == idIngredient
        );
        if (ingredient != undefined) {
          this.ingredientsRecipe.push(ingredient);
        }
        ingredient = this.inventory.find(
          (element) => element.id == idIngredient
        );
        if (ingredient != undefined) {
          this.ingredientsQuantityAvailable.push(ingredient.count!);
        } else {
          this.ingredientsQuantityAvailable.push(0);
          this.recipeReady = false;
        }
        nbIngredients++;
      });

      for (let index = 0; index < 5 - nbIngredients; index++) {
        this.numberNothing.push(1);
      }
    }
  }
}
