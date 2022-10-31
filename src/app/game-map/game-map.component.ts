import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-game-map',
  templateUrl: './game-map.component.html',
  styleUrls: ['./game-map.component.css']
})
export class GameMapComponent implements OnInit {
  pageCurrent:string="grandeSalle"

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit():void{
    this.displayActive();
  }

  displayActive():void{
    document.getElementsByClassName("active")[0]?.classList.remove("active");
    switch(this.pageCurrent){ 
      case "grandeSalle":
        document.getElementById("grandeSalle")?.classList.add("active");
        break;
      case "store":
        document.getElementById("shop")?.classList.add("active");
        break;
      case "cuisine":
        document.getElementById("cuisine")?.classList.add("active");
        break;
      case "terrace":
        document.getElementById("terrasse")?.classList.add("active");
        break;
    }
  }
  displaySalleBox():void{
    
    const boxSalle=document.getElementById('boxSalle');

    if(boxSalle){
      boxSalle.classList.contains("d-none")? (
        boxSalle.classList.remove('d-none'),
        boxSalle.classList.add("d-block")
      ):(
        boxSalle.classList.remove("d-block"),
        boxSalle.classList.add("d-none")
      )
    }
  }

  clickUrl(url : string):void{
    
    this.pageCurrent=url;
    this.displayActive();
    this.displaySalleBox();
    this.router.navigateByUrl('/game/'+url);
  }

}
