export interface Manager {
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

export type IngredientQuantity = {
  idIngredient: number;
  quantity: number;
};
