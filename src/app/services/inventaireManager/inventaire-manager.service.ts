import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Inventaire } from 'src/app/interfaces/inventaire';
@Injectable({
  providedIn: 'root'
})
export class InventaireManagerService {
  private inventaireSave: BehaviorSubject<Inventaire>= new BehaviorSubject<Inventaire>({} as Inventaire);
  inventaireConnect$=this.inventaireSave.asObservable();
  constructor() { 
  }
  setInventaireSave(newInventaire:Inventaire):void{
    this.inventaireSave.next(newInventaire);
  }
}
