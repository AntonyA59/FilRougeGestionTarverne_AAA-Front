import { Component, OnInit } from '@angular/core';
import { Category } from 'src/category';
import { Ingredient } from 'src/ingredient';
import { Subcategory } from 'src/subcategory';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
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
  ];
  inventory: Ingredient[] = [
    {
      id: 64,
      name: 'Bière',
      level: 1,
      buyingPrice: 1,
      idSubCategory: 64,
    },
  ];
  cartSelling: Ingredient[] = [];
  cartBuying: Ingredient[] = [];

  constructor() {}

  ngOnInit(): void {}
  addIngredientToBuying(id: number) {
    let ingredient: Ingredient | undefined;
    let ingredientAlreadyExist: Ingredient | undefined;
    ingredient = this.ingredients.find((element) => element.id == id);
    ingredientAlreadyExist = this.cartBuying.find(
      (element) => element.id == id
    );
    if (ingredientAlreadyExist === undefined && ingredient != undefined) {
      ingredient.count = 1;
      this.cartBuying.push(ingredient);
    } else {
      if (ingredient != undefined && ingredient.count != undefined) {
        ingredient.count++;
      }
    }
  }
  addIngredientToSelling(id: number) {
    let ingredient: Ingredient;
    ingredient = this.ingredients.find((element) => element.id == id)!;
    for (let index = 0; index < this.inventory.length; index++) {
      if (this.inventory[index].id == id) {
        this.cartSelling.push(this.inventory[index]);
        this.inventory.splice(index, 1);
        break;
      }
    }
  }

  removeIngredientToBuying(id: number) {
    for (let index = 0; index < this.cartBuying.length; index++) {
      if (this.cartBuying[index].id == id) {
        this.cartBuying.splice(index, 1);
        break;
      }
    }
  }
  removeIngredientToSelling(id: number) {
    for (let index = 0; index < this.cartSelling.length; index++) {
      if (this.cartSelling[index].id == id) {
        this.inventory.push(this.cartSelling[index]);
        this.cartSelling.splice(index, 1);
        break;
      }
    }
  }
}
