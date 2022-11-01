export interface ManagerModel {
  id: number;
  name: string;
  reputation: number;
  chest: number;
  level: number;
  experience: number;
  idPlayer: number;
  maxExp: number;
  ingredientQuantity: IngredientQuantity;
}

export interface Manager {
  name: string;
}

export type IngredientQuantity = {
  idIngredient: number;
  quantity: number;
};
