import { Component, OnInit } from '@angular/core';
import { Ingredient, IngredientModel } from 'src/app/interfaces/ingredient';

@Component({
  selector: 'app-store-map',
  templateUrl: './store-map.component.html',
  styleUrls: ['./store-map.component.css'],
})
export class StoreMapComponent implements OnInit {
  ingredients: IngredientModel[] = [
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
      name: 'Cuisse de Boeuf',
      level: 1,
      buyingPrice: 3,
      idSubCategory: 6,
      count: 2,
    },
  ];
  cartSelling: Ingredient[] = [];
  cartBuying: Ingredient[] = [];

  totalBuyingPrice: number = 0;
  totalSellingPrice: number = 0;

  constructor() {}

  ngOnInit(): void {}
  addIngredientToBuying(index: number) {
    let ingredient: Ingredient | undefined;
    let ingredientAlreadyExist: Ingredient | undefined;
    ingredient = this.ingredients[index];

    ingredientAlreadyExist = this.cartBuying.find(
      (element) => element.id == ingredient?.id
    );

    if (ingredientAlreadyExist === undefined && ingredient != undefined) {
      ingredient.count = 1;
      this.cartBuying.push(ingredient);
    } else {
      if (ingredient != undefined && ingredient.count != undefined) {
        ingredient.count++;
      }
    }
    this.totalBuyingPrice += ingredient.buyingPrice;
  }
  addIngredientToSelling(index: number) {
    let ingredient: Ingredient | undefined;
    let ingredientAlreadyExist: Ingredient | undefined;
    let ingredient2: Ingredient | undefined;
    ingredient = this.inventory[index];

    ingredientAlreadyExist = this.cartSelling.find(
      (element) => element.id == ingredient?.id
    );

    if (ingredient != undefined && ingredient.count != undefined) {
      if (ingredientAlreadyExist?.count != undefined) {
        ingredientAlreadyExist.count++;
      } else {
        ingredient2 = structuredClone(ingredient);
        ingredient2.count = 1;
        this.cartSelling.push(ingredient2);
      }
      if (ingredient.count < 2) {
        this.inventory.splice(index, 1);
      } else {
        ingredient.count--;
      }
    }
    this.totalSellingPrice += Math.ceil(ingredient.buyingPrice / 2);
  }

  removeIngredientToBuying(index: number) {
    let ingredient: Ingredient | undefined;
    ingredient = this.cartBuying[index];
    if (ingredient != undefined && ingredient.count != undefined) {
      if (ingredient.count <= 1) {
        this.cartBuying.splice(index, 1);
      } else {
        ingredient.count--;
      }
    }
    this.totalBuyingPrice -= ingredient.buyingPrice;
  }

  removeIngredientToSelling(index: number) {
    let ingredient: Ingredient | undefined;
    let ingredientAlreadyExist: Ingredient | undefined;
    let ingredient2: Ingredient | undefined;
    ingredient = this.cartSelling[index];

    ingredientAlreadyExist = this.inventory.find(
      (element) => element.id == ingredient?.id
    );

    if (ingredient != undefined && ingredient.count != undefined) {
      if (ingredientAlreadyExist?.count != undefined) {
        ingredientAlreadyExist.count++;
      } else {
        ingredient2 = structuredClone(ingredient);
        ingredient2.count = 1;
        this.inventory.push(ingredient2);
      }
      if (ingredient.count < 2) {
        this.cartSelling.splice(index, 1);
      } else {
        ingredient.count--;
      }
    }
    this.totalSellingPrice -= Math.ceil(ingredient.buyingPrice / 2);
  }
}
