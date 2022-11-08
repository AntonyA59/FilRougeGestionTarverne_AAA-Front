import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerTableModel } from 'src/app/interfaces/customer-table-model';
import { Recipe } from 'src/app/interfaces/recipe';
import { TableRestModel } from 'src/app/interfaces/table-rest';
import { ManagerModel } from 'src/app/interfaces/manager';
import { TableRestService} from '../tableRest/tableRest.service';
import { ManagerService } from '../manager/manager.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerManagerService {
  private listCustomer= new BehaviorSubject<Customer[]>([] as Customer[])
  listCustomer$=this.listCustomer.asObservable();

  private urlNewCustomer="localhost:8080/api/game/customerManagement/newCustomer";
  private urlNewRecipe="localhost:8080/api/game/customerManagement/newRecipe";
  private urlAssignCustomerInTable="localhost:8080/api/game/customerManagement/customerAssignTable";
  private urlCustomerFinish="localhost:8080/api/game/customerManagement/customerFinish";

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http:HttpClient,private tableService:TableRestService,private managerService:ManagerService) { }
  setListCustomer(newListCustomer:Customer[]):void{
    this.listCustomer.next(newListCustomer);
  }
  
  updateCustomer(customerBefore:Customer, customerAfter:Customer):void{
    let newListCustomer:Customer[]=Array.from(this.listCustomer.getValue());
      const index= newListCustomer.findIndex(element=>element=customerBefore);
      newListCustomer[index]=customerAfter;
      this.setListCustomer(newListCustomer);
  }
  deleteCustomer(customer:Customer):void{
    let newListCustomer:Customer[]=Array.from(this.listCustomer.getValue());
    const index= newListCustomer.findIndex(element=>element=customer);
    newListCustomer.splice(index,1);
    this.setListCustomer(newListCustomer);
  }

  getNewRecipe():Observable<Recipe>{
    return this.http.get<Recipe>(this.urlNewRecipe,this.httpOptions);
  }
  getNewCustomer():Observable<Customer>{
    return new Observable<Customer>(subscriber=>{
      this.http.post<Customer>(this.urlNewCustomer,this.httpOptions).subscribe((newCustomer)=>{
        let newListCustomer:Customer[]=Array.from(this.listCustomer.getValue());
        newListCustomer.push(newCustomer);
        this.setListCustomer(newListCustomer);
        subscriber.next(newCustomer);
      })
    })
  }

  assignCustomerInTable(customer:Customer,table:TableRestModel):void{
    const body= JSON.parse(`{"customerId":${customer.id}, "tableId:${table.id}"}`)
    this.http.post<CustomerTableModel>(this.urlAssignCustomerInTable,body,this.httpOptions).subscribe((customerTableModel)=>{
      this.updateCustomer(customer,customerTableModel.customer);
      this.tableService.updateTable(table,customerTableModel.tableRest);
    });
  }

  customerServed(customer:Customer):void{
    this.http.post<Customer>(this.urlAssignCustomerInTable,customer.id,this.httpOptions).subscribe((customerUpdate)=>{
      this.updateCustomer(customer,customerUpdate);
    });
  }
  customerFinish(customer:Customer,manager:ManagerModel):void{
    const body= JSON.parse(`{"customerId":${customer.id}, "managerId:${manager.id}"}`)
    this.http.post<ManagerModel>(this.urlCustomerFinish,body,this.httpOptions).subscribe((managerUpdate)=>{
      this.deleteCustomer(customer);
      this.managerService.setManager(managerUpdate);
    })
  }
}
