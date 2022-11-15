import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerModel } from 'src/app/interfaces/customer';
import { PlaceModel } from 'src/app/interfaces/place';
import { TableRest } from 'src/app/interfaces/table-rest';
import { CustomerManagementService } from 'src/app/services/customerManagement/customer-management.service';
import { PlacesService } from 'src/app/services/places/places.service';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { TableRestService } from 'src/app/services/tableRest/tableRest.service';
import { TimerService } from 'src/app/services/timer/timer.service';

@Component({
  selector: 'app-restaurant-map',
  templateUrl: './restaurant-map.component.html',
  styleUrls: ['./restaurant-map.component.css'],
})
export class RestaurantMapComponent implements OnInit , OnDestroy{
  place: PlaceModel = {} as PlaceModel;
  customers: CustomerModel[] = [];
  sub: Subscription = new Subscription();
  tableRestWithCustomer: TableRest[] = [];
  newCustomers: CustomerModel[] = [];
  customerIndexSelected: number = 0;
  tableIndexSelected: number = 0;

  constructor(
    private placesService: PlacesService,
    private tableRestService: TableRestService,
    private customerManagementService: CustomerManagementService,
    private recipeService:RecipeService,
    private timerService:TimerService
  ) {}


  ngOnInit(): void {
    this.sub = this.placesService.places$.subscribe((places) => {
      this.place = places.find((element) => element.type == 1)!;
    });

    this.sub = this.tableRestService.tables$.subscribe((tableRests) => {
      this.tableRestWithCustomer=[];
      tableRests.forEach((table) => {
        if (table.idPlace == this.place.id) {
          this.tableRestWithCustomer.push({
            id: table.id,
            numberPlace: table.numberPlace,
            hygiene: table.hygiene,
            posX: table.posX,
            posY: table.posY,
            idPlace: table.idPlace,
            customers: [],
          }); 
        }
      });
    });
    this.sub = this.customerManagementService.customers$.subscribe(
      (customers) => { 
        this.newCustomers=[];
        this.timerService.setTimers([]);
        this.customers=[];
        this.customers=customers;
        this.placeCustomerAtHisTable();
        
      }
    );
  }
  placeCustomerAtHisTable(){
    this.customers.forEach((customer) => {
      if (customer.idTableRest == 1) 
        this.newCustomers.push(customer);
      else {
        for (let i = 0; i < this.tableRestWithCustomer.length; i++) {
          const tableCurrent = this.tableRestWithCustomer[i];
          if (tableCurrent.id == customer.idTableRest) {
            tableCurrent.customers!.push(customer);
          }
        }
      }

      if(customer.consommationStart!=null){
        const recipeTime= this.recipeService.getRecipeById(customer.commandList![0])?.consommationTime;
        const timeNow= Date.now();
        const timeRemaining=(recipeTime!+Number.parseInt(customer.consommationStart))-timeNow
        console.log("recipeTime")
        console.log(recipeTime)
        console.log("statconsomme")
        console.log(customer.consommationStart)
        console.log(Number.parseInt(customer.consommationStart))
        console.log("timeNow")
        console.log(timeNow)
        console.log("timeRemaining")
        console.log(timeRemaining)
        if(timeRemaining <=0 ){
          this.displayBadge();
        }else{
          this.timerService.addTimer(setTimeout(this.displayBadge,timeRemaining));
        }
      }
    });
    this.customers=[]
  }
  
  assignTable() {
    if (this.checkFreeTable()) {
      this.customerManagementService.assignCustomerInTable(
        this.newCustomers[this.customerIndexSelected],
        this.tableRestWithCustomer[this.tableIndexSelected]
      );
      //voir avec simon pour le retour error
    } else {
      // message d'erreur (place non disponibles)
    }
  }

  checkFreeTable():boolean{
    let assignPossible = false;
    if (this.tableRestWithCustomer[this.tableIndexSelected].customers != undefined) {
      if (this.tableRestWithCustomer[this.tableIndexSelected].customers?.length! >=this.tableRestWithCustomer[this.tableIndexSelected].numberPlace) {
      } else {
        assignPossible = true;
      }
    } else {
      assignPossible = true;
    }
    return assignPossible;
  }

  customerChange(event: Event): void {
    if (event.target instanceof HTMLSelectElement && event.target.value != '') {
      this.customerIndexSelected = parseInt(event.target.value);
    }
  }

  tableChange(event: Event): void {
    if (event.target instanceof HTMLSelectElement && event.target.value != '') {
      this.tableIndexSelected = parseInt(event.target.value);
    }
  }
  displayBadge(){
    console.log("display badge")
    const boxSalleBadge=document.querySelector("#restaurant #badge");
    if(boxSalleBadge==null){
      const boxSalle= document.getElementById("restaurant");
      let badge=document.createElement("span");
      badge.classList.add("position-absolute", "top-0" ,"start-100" ,"translate-middle", "p-2","bg-primary", "border", "border-light", "rounded-circle");
      boxSalle?.appendChild(badge);
    }
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
