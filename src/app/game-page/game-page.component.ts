import { Component, OnInit } from '@angular/core';
import { LoadManagerService } from '../services/loadManager/load-manager.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  constructor(private loadManagerService:LoadManagerService) { }

  ngOnInit(): void {
    this.loadManagerService.loadManager(Number.parseInt(sessionStorage.getItem('idManager')!));
  } 

}
