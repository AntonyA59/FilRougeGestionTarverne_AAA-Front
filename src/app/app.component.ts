import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventBusService } from './services/EventBus/event-bus.service';
import { TokenStorageService } from './services/tokenStorage/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  eventBusSub?: Subscription;

  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }
  ngOnDestroy(): void {
    if (this.eventBusSub) {
      this.eventBusSub.unsubscribe();
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
  }
}
