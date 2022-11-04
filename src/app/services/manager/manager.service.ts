import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manager } from 'src/app/interfaces/manager';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  apiUrl: string = '';
  private urlAddManager = this.apiUrl + 'api/manager/create';
  addManager(manager: Manager) {
    return this.http
      .post<Manager>(this.urlAddManager, manager, this.httpOptions)
      .subscribe();
  }
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }
}
