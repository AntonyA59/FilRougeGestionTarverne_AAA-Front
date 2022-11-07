import { Subcategory } from './subcategory';

export interface IngredientModel {
  id: number;
  name: string;
  level: number;
  buyingPrice: number;
  idSubCategory: number;
}

export interface Ingredient {
  id: number;
  name: string;
  level: number;
  buyingPrice: number;
  idSubCategory: number;
  count?: number;
}
