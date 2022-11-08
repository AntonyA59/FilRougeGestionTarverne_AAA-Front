import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from 'src/app/interfaces/ingredient';
@Injectable({
  providedIn: 'root',
})
export class InventoryManagerService {
  private inventaireSave: BehaviorSubject<Ingredient[]> =
    new BehaviorSubject<Ingredient[]>({} as Ingredient[]);
  inventaireConnect$ = this.inventaireSave.asObservable();

  constructor() {

  }
  
  setInventaireSave(newInventaire: Ingredient[]): void {
    this.inventaireSave.next(newInventaire);
  }
  
}
