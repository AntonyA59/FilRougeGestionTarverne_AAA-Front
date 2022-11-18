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
export class RestaurantMapComponent implements OnInit, OnDestroy {
  place: PlaceModel = {} as PlaceModel;
  customers: CustomerModel[] = [];
  sub: Subscription = new Subscription();
  tableRestWithCustomer: TableRest[] = [];
  newCustomers: CustomerModel[] = [];
  customerIndexSelected: number = 0;
  tableIndexSelected: number = 0;
  availableSpace:number=0;

  constructor(
    private placesService: PlacesService,
    private tableRestService: TableRestService,
    private customerManagementService: CustomerManagementService,
    private recipeService: RecipeService,
    private timerService: TimerService
  ) {}

  ngOnInit(): void {
    this.sub = this.placesService.places$.subscribe((places) => {
      this.place = places.find((element) => element.type == 1)!;
    });

    this.sub = this.tableRestService.tables$.subscribe((tableRests) => {
      this.tableRestWithCustomer = [];
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
        this.newCustomers = [];
        this.timerService.setTimers([]);
        this.customers = [];
        this.customers = customers;
        this.placeCustomerAtHisTable();
      }
    );
    setTimeout(this.displayBoxNewCustomer.bind(this),180000);
  }
  placeCustomerAtHisTable() {
    this.customers.forEach((customer) => {
<<<<<<< HEAD
      if (customer.idTableRest == null) 
        this.newCustomers.push(customer);
=======
      console.log(customer.name);
      if (customer.idTableRest == null) this.newCustomers.push(customer);
>>>>>>> Angular-Adrien
      else {
        for (let i = 0; i < this.tableRestWithCustomer.length; i++) {
          const element = this.tableRestWithCustomer[i];
          element.customers?.splice(0,element.customers.length);
        }

        for (let i = 0; i < this.tableRestWithCustomer.length; i++) {
          const tableCurrent = this.tableRestWithCustomer[i];
          if (tableCurrent.id == customer.idTableRest) {
            tableCurrent.customers!.push(customer);
            break;
          }
        }
      }
      

      if (customer.consommationStart != null) {
        const recipeTime = this.recipeService.getRecipeById(
          customer.commandList![0].recipeId
        )?.consommationTime;
        const timeNow = Date.now();
        const timeRemaining =
          recipeTime! + Number.parseInt(customer.consommationStart) - timeNow;
        if (timeRemaining <= 0) {
          this.displayBadge();
        } else {
          this.timerService.addTimer(
            setTimeout(this.displayBadge, timeRemaining)
          );
        }
      }
    });
<<<<<<< HEAD
    this.customers=[];
    this.availableSpace=0;
    for (let i = 0; i < this.tableRestWithCustomer.length; i++) {
      const element = this.tableRestWithCustomer[i];
      this.availableSpace+=element.numberPlace;
    }
=======
    this.customers = [];
>>>>>>> Angular-Adrien
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

  checkFreeTable(): boolean {
    let assignPossible = false;
    if (
      this.tableRestWithCustomer[this.tableIndexSelected].customers != undefined
    ) {
      if (
        this.tableRestWithCustomer[this.tableIndexSelected].customers
          ?.length! >=
        this.tableRestWithCustomer[this.tableIndexSelected].numberPlace
      ) {
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
<<<<<<< HEAD
  displayBadge(){
    const boxSalleBadge=document.querySelector("#restaurant #badge");
    if(boxSalleBadge==null){
      const boxSalle= document.getElementById("restaurant");
      let badge=document.createElement("span");
      badge.classList.add("position-absolute", "top-0" ,"start-100" ,"translate-middle", "p-2","bg-primary", "border", "border-light", "rounded-circle");
      boxSalle?.appendChild(badge);
    }
  }
  displayBoxInfoCustomer(display:boolean,idNummber:number){
    const boxInfoCustomer= document.getElementById(idNummber.toString());
    if(display)
      boxInfoCustomer?.classList.remove("d-none");
    else
      boxInfoCustomer?.classList.add("d-none");
=======
  displayBadge() {
    console.log('display badge');
    const boxSalleBadge = document.querySelector('#restaurant #badge');
    if (boxSalleBadge == null) {
      const boxSalle = document.getElementById('restaurant');
      let badge = document.createElement('span');
      badge.classList.add(
        'position-absolute',
        'top-0',
        'start-100',
        'translate-middle',
        'p-2',
        'bg-primary',
        'border',
        'border-light',
        'rounded-circle'
      );
      boxSalle?.appendChild(badge);
    }
  }
  displayBoxInfo(display: boolean, idNummber: number) {
    const boxInfoCustomer = document.getElementById(idNummber.toString());
    if (display) boxInfoCustomer?.classList.remove('d-none');
    else boxInfoCustomer?.classList.add('d-none');
>>>>>>> Angular-Adrien
  }
  displayBoxNewCustomer(){
    if(this.availableSpace>0){
      const boxInfoNewCustomer=document.getElementById('containerNewCustomer');
      boxInfoNewCustomer?.classList.remove('d-none');
    }
    setTimeout(this.displayBoxNewCustomer.bind(this),180000);
  }
  getNewCustomer(reponse:boolean){
    const boxInfoBullNewCustomer=document.getElementById("containerNewCustomer");
    boxInfoBullNewCustomer?.classList.add('d-none');
    if(reponse){
      this.customerManagementService.getNewCustomer();
    }
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
