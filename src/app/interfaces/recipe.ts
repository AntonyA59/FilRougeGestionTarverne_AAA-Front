import { CustomerModel } from "./customer";
import { IngredientQuantity } from "./ingredient";

export interface Recipe {
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
export interface RecipeCustomerInventoryIngredientModel{
  recipe:Recipe;
  customer:CustomerModel;
  inventaire:IngredientQuantity[]
}
