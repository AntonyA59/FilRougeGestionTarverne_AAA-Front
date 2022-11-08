import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TableRestModel } from 'src/app/interfaces/table-rest';

@Injectable({
  providedIn: 'root'
})
export class TableRestService {
  
  private listTable=new BehaviorSubject<TableRestModel[]>([]as TableRestModel[]);
  listTable$=this.listTable.asObservable();
  
  constructor() { }
  
  setListTable(newListeTable:TableRestModel[]):void{
    this.listTable.next(newListeTable);
  }
  
  updateTable(tableBefore:TableRestModel, tableAfter:TableRestModel):void{
    let newListTable:TableRestModel[]=Array.from(this.listTable.getValue());
      const index= newListTable.findIndex(element=>element=tableBefore);
      newListTable[index]=tableAfter;
      this.setListTable(newListTable);
  }

}
