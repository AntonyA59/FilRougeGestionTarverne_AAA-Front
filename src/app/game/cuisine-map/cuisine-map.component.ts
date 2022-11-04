import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-cuisine-map',
  templateUrl: './cuisine-map.component.html',
  styleUrls: ['./cuisine-map.component.css'],
})
export class CuisineMapComponent implements OnInit {
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
      tabIngredientsForRecipe: [1],
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
      tabIngredientsForRecipe: [1],
    },
  ];
  IngredientsRecipe: Recipe[] = [];
  numberNothing: number[] = [1, 1, 1, 1, 1];

  constructor() {}

  ngOnInit(): void {}
}
