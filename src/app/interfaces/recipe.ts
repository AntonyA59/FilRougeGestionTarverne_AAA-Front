import { CustomerModel } from './customer';
import { IngredientQuantity } from './ingredient';

export interface RecipeModel {
  id: number;
  name: string;
  sellingPrice: number;
  level: number;
  consommationTime: number;
  preparationTime: number;
  peremptionDate: string;
  expGiven: number;
  idSubCategory: number;
  tabIngredientsForRecipe: IngredientQuantity[];
}

export interface RecipeCustomerModel {
  recipeId: number;
  customerId: number;
  recipeStart?: string;
}
export interface RecipeCustomerInventoryIngredientModel {
  recipe: RecipeModel;
  customer: CustomerModel;
  recipeStart?: string;
  inventaire: IngredientQuantity[];
}

export interface RequestRecipeDto {
  managerId: number;
  recipeId: number;
  customerId: number;
}
export interface RecipeCustomerInstance {
  recipe: RecipeModel;
  customer: CustomerModel;
  recipeStart?: string;
}
