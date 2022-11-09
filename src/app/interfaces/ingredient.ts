export interface IngredientQuantity {
  id: number;
  name: string;
  level: number;
  buyingPrice: number;
  idSubCategory: number;
  quantity: number;
}
export interface Ingredient{
  id: number;
  name: string;
  level: number;
  buyingPrice: number;
  idSubCategory: number;
  quantity?: number|undefined;

}

