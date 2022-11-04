import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthStatus } from 'src/app/interfaces/auth-status';
import { Player } from 'src/app/interfaces/player';
import { Status } from 'src/app/interfaces/status';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private curUser = new BehaviorSubject<AuthStatus>({
    connected: false,
  });
  curUserObs$ = this.curUser.asObservable();

  constructor(private http: HttpClient) {}

  login(player: Player): Observable<Player> {
    return this.http.post<Player>(environment.apiUrl + 'login', player);
  }
  register(player: Player): Observable<Player | Status> {
    return this.http.post<Player | Status>(
      environment.apiUrl + 'register',
      player
    );
  }
  setAuthStatus(auth: AuthStatus) {
    this.curUser.next(auth);
  }

  isPlayer(obj: any): obj is Player {
    return 'email' in obj;
  }
  isStatus(obj: any): obj is Status {
    return 'response' in obj;
  }
  isConnected(): boolean {
    return this.curUser.value.connected;
  }
}
