import { Subcategory } from './subcategory';

export interface Ingredient {
  id: number;
  name: string;
  level: number;
  buyingPrice: number;
  idSubCategory: number;
}
