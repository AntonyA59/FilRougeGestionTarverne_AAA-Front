import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manager } from '../../interfaces/manager';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  private urlAddManager = 'localhost:8080/api/manager/create';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  addManager(manager: Manager) {
    return this.http
      .post<Manager>(this.urlAddManager, manager, this.httpOptions)
      .subscribe();
  }
  constructor(private http: HttpClient) {}
}
