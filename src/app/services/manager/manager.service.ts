import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ManagerModel } from 'src/app/interfaces/manager';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
    }),
  };
  private emailPlayer: string = sessionStorage.getItem('email')!;
  private urlAddManager = environment.apiUrl + 'api/game/manager/create';
  private urlListManager =
    environment.apiUrl + 'api/game/manager/listExistingManager';

  constructor(private http: HttpClient) {}

  addManager(name: string, email: string) {
    return this.http
      .post<any>(this.urlAddManager, { name, email }, this.httpOptions)
      .subscribe();
  }

  listManager(): Observable<ManagerModel[]> {
    const body = JSON.parse(`{"email": "${this.emailPlayer}"}`);
    return this.http.post<ManagerModel[]>(
      this.urlListManager,
      body,
      this.httpOptions
    );
  }

  loadManager() {}
}
