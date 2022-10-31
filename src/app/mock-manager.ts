import { Manager } from './interfaces/manager';

export const MANAGERS: Manager[] = [
  {
    id: 1,
    chest: 10,
    experience: 30,
    idPlayer: 1,
    ingredientQuantity: { idIngredient: 2, quantity: 2 },
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
    ingredientQuantity: { idIngredient: 2, quantity: 2 },
    level: 1,
    maxExp: 100,
    name: 'Adrien',
    reputation: 2,
  },
  {
    id: 3,
    chest: 50,
    experience: 60,
    idPlayer: 1,
    ingredientQuantity: { idIngredient: 2, quantity: 2 },
    level: 1,
    maxExp: 100,
    name: 'Alexandre',
    reputation: 2,
  },
  {
    id: 4,
    chest: 150,
    experience: 40,
    idPlayer: 1,
    ingredientQuantity: { idIngredient: 2, quantity: 2 },
    level: 1,
    maxExp: 100,
    name: 'Simon',
    reputation: 2,
  },
];
