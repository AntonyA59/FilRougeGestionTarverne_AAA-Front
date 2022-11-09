import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthStatus } from 'src/app/interfaces/auth-status';
import { Player } from 'src/app/interfaces/player';
import { Status } from 'src/app/interfaces/status';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private curUser = new BehaviorSubject<AuthStatus>({
    connected: false,
  });
  curUserObs$ = this.curUser.asObservable();

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };

  login(email: string, password: string) {
    let body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);
    return this.http
      .post<any>(
        environment.apiUrl + 'login',
        body.toString(),
        this.httpOptions
      )
      .pipe(
        map((userData) => {
          sessionStorage.setItem('email', email);
          return userData;
        })
      );
  }
  register(player: Player): Observable<Player> {
    return this.http.post<Player>(environment.apiUrl + 'api/register', player);
  }
  isUserLoggedIn() {
    let email = sessionStorage.getItem('email');
    return !(email === null);
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

  logOut() {
    sessionStorage.clear();
  }
}
