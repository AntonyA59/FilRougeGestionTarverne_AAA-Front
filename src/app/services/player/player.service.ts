import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  emailPlayer = sessionStorage.getItem('email');
  apiModifEmail = environment.apiUrl + 'api/game/modifEmail';
  apiModifNickname = environment.apiUrl + 'api/game/modifNickname';
  apiModifPassword = environment.apiUrl + 'api/game/modifPassword';
  constructor(private http: HttpClient, private router: Router) {}

  modifEmail(emailModified: string) {
    const body = JSON.parse(
      `{"emailPlayer": "${this.emailPlayer}", "emailModified": "${emailModified}" }`
    );
    return this.http.post(this.apiModifEmail, body).subscribe();
  }

  modifNickname(nickname: string) {
    const body = JSON.parse(
      `{"email": "${this.emailPlayer}", "nickName": "${nickname}"}`
    );
    return this.http.post(this.apiModifNickname, body).subscribe();
  }

  modifPassword(password: string) {
    const body = JSON.parse(
      `{"email": "${this.emailPlayer}", "password": "${password}"}`
    );
    return this.http.post(this.apiModifPassword, body).subscribe();
  }
}
