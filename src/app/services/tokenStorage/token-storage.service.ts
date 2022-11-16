import { Injectable } from '@angular/core';

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';
@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  signOut() {
    window.sessionStorage.clear();
  }
  saveToken(token: string) {
    window.sessionStorage.removeItem(ACCESS_TOKEN);
    window.sessionStorage.setItem(ACCESS_TOKEN, token);
  }

  getToken() {
    return window.sessionStorage.getItem(ACCESS_TOKEN);
  }

  saveRefreshToken(token: string): void {
    window.sessionStorage.removeItem(REFRESH_TOKEN);
    window.sessionStorage.setItem(REFRESH_TOKEN, token);
  }

  getRefreshToken(): string | null {
    return window.sessionStorage.getItem(REFRESH_TOKEN);
  }
}
