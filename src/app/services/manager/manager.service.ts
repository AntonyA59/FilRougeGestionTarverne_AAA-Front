import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Manager, ManagerModel } from '../../interfaces/manager';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  private manager= new BehaviorSubject<ManagerModel>({} as ManagerModel);
  manager$=this.manager.asObservable();

  private urlAddManager = 'localhost:8080/api/manager/create';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  
  constructor(private http: HttpClient) {}
  
  setManager(newManager:ManagerModel):void{
    this.manager.next(newManager);
  }

  addManager(manager: Manager) {
    return this.http
      .post<Manager>(this.urlAddManager, manager, this.httpOptions)
      .subscribe();
  }
}
