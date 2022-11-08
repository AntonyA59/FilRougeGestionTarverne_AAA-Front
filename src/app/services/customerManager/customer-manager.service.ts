import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerTableModel } from 'src/app/interfaces/customer-table-model';
import { Recipe } from 'src/app/interfaces/recipe';
import { TableRest } from 'src/app/interfaces/table-rest';

@Injectable({
  providedIn: 'root'
})
export class CustomerManagerService {
  private listCustomer= new BehaviorSubject<Customer[]>([] as Customer[])
  listCustomer$=this.listCustomer.asObservable();

  private urlNewCustomer="localhost:8080/api/customerManagement/newCustomer";
  private urlNewRecipe="localhost:8080/api/customerManagement/newRecipe";
  private urlAssignCustomerInTable="localhost:8080/api/customerManagement/customerAssignTable";

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http:HttpClient) { }
  setListCustomer(newListCustomer:Customer[]):void{
    this.listCustomer.next(newListCustomer);
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

  assignCustomerInTable(customer:Customer,table:TableRest):void{
    const body= JSON.parse(`{"customerId":${customer.id}, "tableId:${table.id}"}`)
    this.http.post<CustomerTableModel>(this.urlAssignCustomerInTable,this.httpOptions,body).subscribe((customerTableModel)=>{
      let newListCustomer:Customer[]=Array.from(this.listCustomer.getValue());
      const index= newListCustomer.findIndex(element=>element=customer);
      newListCustomer[index]=customerTableModel.customer
    });
  }
}
