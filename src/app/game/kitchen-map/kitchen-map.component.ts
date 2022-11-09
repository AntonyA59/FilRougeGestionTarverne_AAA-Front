import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { Ingredient, IngredientQuantity } from 'src/app/interfaces/ingredient';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-cuisine-map',
  templateUrl: './kitchen-map.component.html',
  styleUrls: ['./kitchen-map.component.css'],
})
export class KitchenMapComponent implements OnInit {
  customers: Customer[] = [
    {
      id: 1,
      purseOfGold: 2,
      happiness: 2,
      hunger: 2,
      thirst: 2,
      nauseaLevel: 2,
      alcoholLevel: 2,
      toilet: 2,
      timeInTavern: '2',
      nauseaTolerance: 2,
      alcoholTolerance: 2,
      gender: 2,
      expGiven: 2,
      idTableRest: 2,
      consommationStart: '2',
      commandList:[1],
      name: 'Oscar Ambar',
    },
    {
      id: 2,
      purseOfGold: 3,
      happiness: 3,
      hunger: 3,
      thirst: 3,
      nauseaLevel: 3,
      alcoholLevel: 3,
      toilet: 3,
      timeInTavern: '2',
      nauseaTolerance: 3,
      alcoholTolerance: 3,
      gender: 3,
      expGiven: 3,
      idTableRest: 2,
      consommationStart: '0',
      commandList:[1],
      name: 'Anne Ogastric',
    },
    {
      id: 2,
      purseOfGold: 3,
      happiness: 3,
      hunger: 3,
      thirst: 3,
      nauseaLevel: 3,
      alcoholLevel: 3,
      toilet: 3,
      timeInTavern: '2',
      nauseaTolerance: 3,
      alcoholTolerance: 3,
      gender: 3,
      expGiven: 3,
      idTableRest: 2,
      consommationStart: '0',
      commandList:[1],
      name: 'Julie Ogastric',
    },
  ];
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
  inventory: IngredientQuantity[] = [
    {
      id: 64,
      name: 'Bière',
      level: 1,
      buyingPrice: 15,
      idSubCategory: 64,
      quantity: 18,
    },
    {
      id: 94,
      name: 'Pain',
      level: 1,
      buyingPrice: 3,
      idSubCategory: 6,
      quantity: 2,
    },
    {
      id: 14,
      name: 'Cuisse de Boeuf',
      level: 1,
      buyingPrice: 1,
      idSubCategory: 6,
      quantity: 1,
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
      tabIngredientsForRecipe: [
        {
          id: 1,
          name: "toto",
          level: 1,
          buyingPrice: 10,
          idSubCategory: 1,
          quantity: 10,
        }
      ],
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
      tabIngredientsForRecipe: [
        {
          id: 1,
          name: "toto",
          level: 1,
          buyingPrice: 10,
          idSubCategory: 1,
          quantity: 10,
        },
        {
          id: 2,
          name: "toto",
          level: 1,
          buyingPrice: 10,
          idSubCategory: 1,
          quantity: 10,
        },
        {
          id: 3,
          name: "toto",
          level: 1,
          buyingPrice: 10,
          idSubCategory: 1,
          quantity: 10,
        }],
    },
  ];
  ingredientsRecipe: Ingredient[] = [];
  numberNothing: number[] = [1, 1, 1, 1];
  recipeSelected = {} as Recipe;
  ingredientsQuantityAvailable: number[] = [];
  textdark = 'text-dark';
  textred = 'text-danger';
  recipeReady = false;
  customerChoosing = false;

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
          this.ingredientsQuantityAvailable.push(ingredient.quantity!);
        } else {
          this.ingredientsQuantityAvailable.push(0);
          this.recipeReady = false;
        }
        nbIngredients++;
      });

      for (let index = 0; index < 4 - nbIngredients; index++) {
        this.numberNothing.push(1);
      }
    }
  }
  customerChange(event: Event): void {
    if (event.target instanceof HTMLSelectElement && event.target.value != '') {
      this.customerChoosing = true;
    } else {
      this.customerChoosing = false;
    }
  }
}
