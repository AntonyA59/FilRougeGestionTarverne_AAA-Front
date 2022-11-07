import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Inventaire } from 'src/app/interfaces/inventory';
@Injectable({
  providedIn: 'root',
})
export class InventoryManagerService {
  private inventaireSave: BehaviorSubject<Inventaire> =
    new BehaviorSubject<Inventaire>({} as Inventaire);
  inventaireConnect$ = this.inventaireSave.asObservable();
  constructor() {}
  setInventaireSave(newInventaire: Inventaire): void {
    this.inventaireSave.next(newInventaire);
  }
}
