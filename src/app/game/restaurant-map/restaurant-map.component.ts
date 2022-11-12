import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { PlaceModel } from 'src/app/interfaces/place';
import {
  TableRest,
  AssignNewTableForCustomerDto,
} from 'src/app/interfaces/table-rest';
import { CustomerManagementService } from 'src/app/services/customerManagement/customer-management.service';
import { PlacesService } from 'src/app/services/places/places.service';
import { TableRestService } from 'src/app/services/tableRest/tableRest.service';

@Component({
  selector: 'app-restaurant-map',
  templateUrl: './restaurant-map.component.html',
  styleUrls: ['./restaurant-map.component.css'],
})
export class RestaurantMapComponent implements OnInit {
  place: PlaceModel = {} as PlaceModel;
  customers: Customer[] = [];
  sub: Subscription = new Subscription();
  tableRestWithCustomer: TableRest[] = [];
  newCustomers: Customer[] = [];
  customerIndexSelected: number = 0;
  tableIndexSelected: number = 0;
  assignNewTableForCustomerDto = {} as AssignNewTableForCustomerDto;

  constructor(
    private placesService: PlacesService,
    private tableRestService: TableRestService,
    private customerManagementService: CustomerManagementService
  ) {}

  ngOnInit(): void {
    this.sub = this.placesService.places$.subscribe((places) => {
      this.place = places.find((element) => element.type == 1)!;
    });

    this.sub = this.tableRestService.tables$.subscribe((tableRests) => {
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
    this.sub = this.customerManagementService.listCustomer$.subscribe(
      (customers) => {
        customers.forEach((customer) => {
          for (let i = 0; i < this.tableRestWithCustomer.length; i++) {
            const tableCurrent = this.tableRestWithCustomer[i];
            if (tableCurrent.id == customer.idTableRest)
              tableCurrent.customers!.push();
            else this.newCustomers.push(customer);
          }
        });
      }
    );
  }

  assignTable() {
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

    if (assignPossible) {
      this.assignNewTableForCustomerDto.customerId =
        this.newCustomers[this.customerIndexSelected].id;
      this.assignNewTableForCustomerDto.tableId =
        this.tableRestWithCustomer[this.tableIndexSelected].id;
      // Envoi du post avec comme attribut this.assignNewTableForCustomerDto

      if (true) {
        this.newCustomers[this.customerIndexSelected].numImg =
          Math.floor(Math.random() * 7) + 1;
        this.tableRestWithCustomer[this.tableIndexSelected].customers?.push(
          this.newCustomers[this.customerIndexSelected]
        );
        this.newCustomers.splice(this.customerIndexSelected, 1);
      } else {
        //erreur venant du back
      }
    } else {
      // message d'erreur (place non disponibles)
    }
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
}
