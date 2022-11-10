import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadManagerService } from '../services/loadManager/load-manager.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  constructor(private loadManagerService: LoadManagerService,private router:Router) { }

  ngOnInit(): void {
    
    if(sessionStorage.getItem("idManager")){
      const idManager:number=Number.parseInt(sessionStorage.getItem("idManager")!);
      this.loadManagerService.loadManager(idManager);
    }else{
      this.router.navigateByUrl('/');
    }

  }

}
