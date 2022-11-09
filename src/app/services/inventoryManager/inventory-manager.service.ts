import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IngredientQuantity } from 'src/app/interfaces/ingredient';
@Injectable({
  providedIn: 'root',
})
export class InventoryManagerService {
  private inventaireSave: BehaviorSubject<IngredientQuantity[]> =
    new BehaviorSubject<IngredientQuantity[]>({} as IngredientQuantity[]);
  inventaireConnect$ = this.inventaireSave.asObservable();

  constructor() {

  }
  
  setInventaireSave(newInventaire: IngredientQuantity[]): void {
    this.inventaireSave.next(newInventaire);
  }
  
}
