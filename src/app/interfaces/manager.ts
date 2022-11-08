import { IngredientQuantity } from "./ingredient";

export interface ManagerModel {
  id: number;
  name: string;
  reputation: number;
  chest: number;
  level: number;
  experience: number;
  idPlayer: number;
  maxExp: number;
  ingredientQuantity: IngredientQuantity[];
}

export interface Manager {
  name: string;
}

export const MANAGERS: ManagerModel[] = [
  {
    id: 1,
    chest: 10,
    experience: 30,
    idPlayer: 1,
    ingredientQuantity:[ {   
      id: 1,
      name: "test",
      level: 1,
      buyingPrice: 1,
      idSubCategory: 1,
      quantity: 1
    }],
    level: 1,
    maxExp: 100,
    name: 'Antony',
    reputation: 2,
  },
  {
    id: 2,
    chest: 20,
    experience: 40,
    idPlayer: 1,
    ingredientQuantity:[ {   
      id: 1,
      name: "test",
      level: 1,
      buyingPrice: 1,
      idSubCategory: 1,
      quantity: 1
    }],    level: 1,
    maxExp: 100,
    name: 'Adrien',
    reputation: 2,
  },
  {
    id: 3,
    chest: 50,
    experience: 60,
    idPlayer: 1,
    ingredientQuantity:[ {   
      id: 1,
      name: "test",
      level: 1,
      buyingPrice: 1,
      idSubCategory: 1,
      quantity: 1
    }],    level: 1,
    maxExp: 100,
    name: 'Alexandre',
    reputation: 2,
  },
  {
    id: 4,
    chest: 150,
    experience: 40,
    idPlayer: 1,
    ingredientQuantity:[ {   
      id: 1,
      name: "test",
      level: 1,
      buyingPrice: 1,
      idSubCategory: 1,
      quantity: 1
    }],    level: 1,
    maxExp: 100,
    name: 'Simon',
    reputation: 2,
  },
];
