import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
} from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  filter,
  ignoreElements,
  Observable,
  of,
  switchMap,
  take,
  throwError,
} from 'rxjs';
import { TokenStorageService } from '../services/tokenStorage/token-storage.service';
import { AuthService } from '../services/auth/auth.service';
import { JwtToken } from '../interfaces/JwtToken';
import { Router } from '@angular/router';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  isTokenRefreshing = false;
  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private tokenStorageService: TokenStorageService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      (req.url.indexOf('/home/connexion') !== -1 ||
        req.url.indexOf('/home/inscription') !== -1) &&
      sessionStorage.getItem('accessToken')
    ) {
      this.addToken(req, this.tokenStorageService.getToken());
      return next.handle(req);
    }

    return next.handle(req);
  }

  addToken(req: HttpRequest<any>, token: any) {
    return req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token),
    });
  }
}
