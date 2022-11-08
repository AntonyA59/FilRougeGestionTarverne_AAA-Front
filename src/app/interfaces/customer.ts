export interface CustomerModel {
  id: number;
  purseOfGold: number;
  happiness: number;
  hunger: number;
  thirst: number;
  nauseaLevel: number;
  alcoholLevel: number;
  toilet: number;
  timeInTavern: string;
  nauseaTolerance: number;
  alcoholTolerance: number;
  gender: number;
  expGiven: number;
  idTableRest?: number;
  consommationStart: string;
}
export interface Customer {
  id: number;
  purseOfGold: number;
  happiness: number;
  hunger: number;
  thirst: number;
  nauseaLevel: number;
  alcoholLevel: number;
  toilet: number;
  timeInTavern: string;
  nauseaTolerance: number;
  alcoholTolerance: number;
  gender: number;
  expGiven: number;
  idTableRest: number;
  consommationStart: string;
  commandList:number[];
  name?: string;
  numImg?: number;
}
