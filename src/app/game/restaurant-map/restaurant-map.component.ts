import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { PlaceModel } from 'src/app/interfaces/place';
import {
  TableRest,
  TableRestModel,
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
  places: PlaceModel[] = [];
  customers: Customer[] = [];
  tableRests: TableRestModel[] = [];
  sub: Subscription = new Subscription();
  tableRestWithCustomer: TableRest[] = [];
  newCustomers: Customer[] = [];
  customerIndexSelected: number = 0;
  tableIndexSelected: number = 0;
  assignNewTableForCustomerDto = {} as AssignNewTableForCustomerDto;

  constructor(
    private placesService: PlacesService,
    private tableRestService: TableRestService
  ) {}

  ngOnInit(): void {
    let customerTempo = {} as Customer;
    let placeTempo = {} as PlaceModel;

    this.sub = this.placesService.places$.subscribe((places) => {
      this.places = places;
    });

    this.sub = this.tableRestService.tables$.subscribe((tableRests) => {
      this.tableRests = tableRests;
    });

    placeTempo = this.places.find((element) => element.type == 1)!;

    this.tableRests.forEach((table) => {
      if (table.idPlace == placeTempo.id) {
        this.tableRestWithCustomer.push(table);
      }
    });

    this.tableRestWithCustomer.forEach((table) => {
      table.customers = [];
      this.customers.forEach((customer) => {
        customerTempo = customer;
        if (customerTempo.idTableRest == table.id) {
          customerTempo.numImg = Math.floor(Math.random() * 7) + 1;
          table.customers?.push(customer);
        }
      });
    });

    this.customers.forEach((customer) => {
      if (customer.idTableRest == undefined || customer.idTableRest < 1) {
        this.newCustomers.push(customerTempo);
      }
    });
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
