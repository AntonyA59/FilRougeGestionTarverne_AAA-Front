import { CategoryModel } from './category';
import { CustomerModel } from './customer';
import { IngredientModel, IngredientQuantity } from './ingredient';
import { ManagerModel } from './manager';
import { PlaceModel } from './place';
import { RecipeModel } from './recipe';
import { SubCategoryModel } from './subcategory';
import { TableRestModel } from './table-rest';

export interface LoadManager {
  manager: ManagerModel;
  categories: CategoryModel[];
  customers: CustomerModel[];
  ingredients: IngredientModel[];
  inventoryManagerIngredient: IngredientQuantity[];
  places: PlaceModel[];
  recipes: RecipeModel[];
  subCategories: SubCategoryModel[];
  tableRests: TableRestModel[];
}
