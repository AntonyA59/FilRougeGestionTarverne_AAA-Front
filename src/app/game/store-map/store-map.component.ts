import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  IngredientModel,
  IngredientQuantity,
  ShopIngredientDto,
  ShopIngredientQuantity,
} from 'src/app/interfaces/ingredient';
import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';

@Component({
  selector: 'app-store-map',
  templateUrl: './store-map.component.html',
  styleUrls: ['./store-map.component.css'],
})
export class StoreMapComponent implements OnInit {
  ingredients: IngredientModel[] = [];
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
      name: 'Cuisse de Boeuf',
      level: 1,
      buyingPrice: 3,
      idSubCategory: 6,
      quantity: 2,
    },
  ];
  cartSelling: IngredientQuantity[] = [];
  cartBuying: IngredientQuantity[] = [];

  totalBuyingPrice: number = 0;
  totalSellingPrice: number = 0;

  shopIngredientDtoToSelling = {} as ShopIngredientDto;
  shopIngredientDtoToBuying = {} as ShopIngredientDto;

  sub: Subscription = new Subscription();

  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit(): void {
    let strTableSelling = '';
    let strTableBuying = '';
    let strInventory = ' ;';
    let strTotalBuyingPrice = '';
    let strTotalSellingPrice = '';

    this.sub = this.ingredientsService.ingredients$.subscribe((ingredientS) => {
      this.ingredients = ingredientS;
    });

    strTableSelling = sessionStorage.getItem('tableSelling')!;
    strTableBuying = sessionStorage.getItem('tableBuying')!;

    strInventory = sessionStorage.getItem('inventory')!;

    strTotalSellingPrice = sessionStorage.getItem('totalSelling')!;
    strTotalBuyingPrice = sessionStorage.getItem('totalBuying')!;

    if (strTotalBuyingPrice != null) {
      this.totalBuyingPrice = parseInt(strTotalBuyingPrice);
    }
    if (strTotalSellingPrice != null) {
      this.totalSellingPrice = parseInt(strTotalSellingPrice);
    }
    if (strTableSelling != null) {
      this.cartSelling = JSON.parse(strTableSelling);
    }
    if (strTableBuying != null) {
      this.cartBuying = JSON.parse(strTableBuying);
    }
    if (strInventory != null) {
      this.inventory = JSON.parse(strInventory);
    }
  }
  addIngredientToBuying(index: number) {
    let ingredient: IngredientQuantity | undefined;
    let ingredientAlreadyExist: IngredientQuantity | undefined;

    if (this.ingredients[index] != undefined) {
      ingredient = this.ingredients[index];
      ingredientAlreadyExist = this.cartBuying.find(
        (element) => element.id == ingredient?.id
      );

      if (ingredientAlreadyExist === undefined && ingredient != undefined) {
        ingredient.quantity = 1;
        this.cartBuying.push(ingredient);
      } else {
        if (ingredient != undefined && ingredient.quantity != undefined) {
          ingredient.quantity++;
        }
      }
      this.totalBuyingPrice += ingredient!.buyingPrice;
      sessionStorage.setItem('totalBuying', this.totalBuyingPrice.toString());
      sessionStorage.setItem('tableBuying', JSON.stringify(this.cartBuying));
    }
  }
  addIngredientToSelling(index: number) {
    let ingredient: IngredientQuantity | undefined;
    let ingredientAlreadyExist: IngredientQuantity | undefined;
    let ingredient2: IngredientQuantity | undefined;

    if (this.ingredients[index] != undefined) {
      ingredient = this.inventory[index];
      ingredientAlreadyExist = this.cartSelling.find(
        (element) => element.id == ingredient?.id
      );

      if (ingredient != undefined && ingredient.quantity != undefined) {
        if (ingredientAlreadyExist?.quantity != undefined) {
          ingredientAlreadyExist.quantity++;
        } else {
          ingredient2 = structuredClone(ingredient);
          ingredient2.quantity = 1;
          this.cartSelling.push(ingredient2);
        }
        if (ingredient.quantity < 2) {
          this.inventory.splice(index, 1);
        } else {
          ingredient.quantity--;
        }
      }
      this.totalSellingPrice += Math.ceil(ingredient.buyingPrice / 2);
      sessionStorage.setItem('totalSelling', this.totalSellingPrice.toString());
      sessionStorage.setItem('tableSelling', JSON.stringify(this.cartSelling));
      sessionStorage.setItem('inventory', JSON.stringify(this.inventory));
    }
  }

  removeIngredientToBuying(index: number) {
    let ingredient: IngredientQuantity | undefined;

    if (this.ingredients[index] != undefined) {
      ingredient = this.cartBuying[index];
      if (ingredient != undefined && ingredient.quantity != undefined) {
        if (ingredient.quantity <= 1) {
          this.cartBuying.splice(index, 1);
        } else {
          ingredient.quantity--;
        }
      }
      this.totalBuyingPrice -= ingredient.buyingPrice;
      sessionStorage.setItem('totalBuying', this.totalBuyingPrice.toString());
      sessionStorage.setItem('tableBuying', JSON.stringify(this.cartBuying));
    }
  }

  removeIngredientToSelling(index: number) {
    let ingredient: IngredientQuantity | undefined;
    let ingredientAlreadyExist: IngredientQuantity | undefined;
    let ingredient2: IngredientQuantity | undefined;
    ingredient = this.cartSelling[index];

    if (this.ingredients[index] != undefined) {
      ingredientAlreadyExist = this.inventory.find(
        (element) => element.id == ingredient?.id
      );

      if (ingredient != undefined && ingredient.quantity != undefined) {
        if (ingredientAlreadyExist?.quantity != undefined) {
          ingredientAlreadyExist.quantity++;
        } else {
          ingredient2 = structuredClone(ingredient);
          ingredient2.quantity = 1;
          this.inventory.push(ingredient2);
        }
        if (ingredient.quantity < 2) {
          this.cartSelling.splice(index, 1);
        } else {
          ingredient.quantity--;
        }
      }
      this.totalSellingPrice -= Math.ceil(ingredient.buyingPrice / 2);
      sessionStorage.setItem('totalSelling', this.totalSellingPrice.toString());
      sessionStorage.setItem('tableSelling', JSON.stringify(this.cartSelling));
      sessionStorage.setItem('inventory', JSON.stringify(this.inventory));
    }
  }
  commitTransaction() {
    let shopIngredientQuantity = {} as ShopIngredientQuantity;
    this.shopIngredientDtoToSelling.idManager = 1;
    let stopTransaction: boolean = false;

    if (this.cartSelling.length > 0) {
      this.cartSelling.forEach((element) => {
        if (element.quantity != undefined) {
          shopIngredientQuantity.idIngredient = element.id;
          shopIngredientQuantity.quantity = element.quantity;
          this.shopIngredientDtoToSelling.shopIngredientQuantity.push(
            shopIngredientQuantity
          );
          //envoie du post avec comme argument this.shopIngredientDtoToSelling
          if (true) {
            this.totalSellingPrice = 0;
            this.cartSelling = [];
            sessionStorage.removeItem('totalSelling');
            sessionStorage.removeItem('tableSelling');
            sessionStorage.setItem('inventory', JSON.stringify(this.inventory));
          } else {
            stopTransaction = true;
            //message d'erreur
          }
        }
      });
    }

    if (stopTransaction == false) {
      this.shopIngredientDtoToBuying.idManager = 1;
      shopIngredientQuantity = {} as ShopIngredientQuantity;

      if (this.cartBuying.length > 0) {
        this.cartBuying.forEach((element) => {
          if (element.quantity != undefined) {
            shopIngredientQuantity.idIngredient = element.id;
            shopIngredientQuantity.quantity = element.quantity;
            this.shopIngredientDtoToBuying.shopIngredientQuantity.push(
              shopIngredientQuantity
            );
            //envoie du post avec comme argument this.shopIngredientDtoToBuying
            if (true) {
              this.cartBuying = [];
              this.totalBuyingPrice = 0;
              sessionStorage.removeItem('totalBuying');
              sessionStorage.removeItem('tableBuying');
              sessionStorage.setItem(
                'inventory',
                JSON.stringify(this.inventory)
              );
            } else {
              //erreur venant du back
            }
          }
        });
      }
    }
  }
}
