import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/tokenStorage/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  title = ' ';

  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
  }
}
