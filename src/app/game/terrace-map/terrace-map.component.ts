import { Component, OnInit } from '@angular/core';
import { Customer, CustomerModel } from 'src/app/interfaces/customer';
import { PlaceModel } from 'src/app/interfaces/place';
import { TableRest, TableRestModel } from 'src/app/interfaces/table-rest';

@Component({
  selector: 'app-terrace-map',
  templateUrl: './terrace-map.component.html',
  styleUrls: ['./terrace-map.component.css'],
})
export class TerraceMapComponent implements OnInit {
  places: PlaceModel[] = [
    {
      id: 1,
      name: 'Grande Salle',
      type: 1,
      level: 1,
    },
    {
      id: 2,
      name: 'Terasse',
      type: 2,
      level: 1,
    },
  ];
  customers: CustomerModel[] = [
    {
      id: 1,
      purseOfGold: 2,
      happiness: 2,
      hunger: 2,
      thirst: 2,
      nauseaLevel: 2,
      alcoholLevel: 2,
      toilet: 2,
      timeInTavern: '2',
      nauseaTolerance: 2,
      alcoholTolerance: 2,
      gender: 2,
      expGiven: 2,
      idTableRest: 1,
      consommationStart: '2',
    },
    {
      id: 2,
      purseOfGold: 3,
      happiness: 3,
      hunger: 3,
      thirst: 3,
      nauseaLevel: 3,
      alcoholLevel: 3,
      toilet: 3,
      timeInTavern: '2',
      nauseaTolerance: 3,
      alcoholTolerance: 3,
      gender: 3,
      expGiven: 3,
      idTableRest: 1,
      consommationStart: '0',
    },
    {
      id: 3,
      purseOfGold: 3,
      happiness: 3,
      hunger: 3,
      thirst: 3,
      nauseaLevel: 3,
      alcoholLevel: 3,
      toilet: 3,
      timeInTavern: '2',
      nauseaTolerance: 3,
      alcoholTolerance: 3,
      gender: 3,
      expGiven: 3,
      idTableRest: 1,
      consommationStart: '0',
    },
    {
      id: 4,
      purseOfGold: 3,
      happiness: 3,
      hunger: 3,
      thirst: 3,
      nauseaLevel: 3,
      alcoholLevel: 3,
      toilet: 3,
      timeInTavern: '2',
      nauseaTolerance: 3,
      alcoholTolerance: 3,
      gender: 3,
      expGiven: 3,
      idTableRest: 1,
      consommationStart: '0',
    },
    {
      id: 4,
      purseOfGold: 3,
      happiness: 3,
      hunger: 3,
      thirst: 3,
      nauseaLevel: 3,
      alcoholLevel: 3,
      toilet: 3,
      timeInTavern: '2',
      nauseaTolerance: 3,
      alcoholTolerance: 3,
      gender: 3,
      expGiven: 3,
      idTableRest: 3,
      consommationStart: '0',
    },
    {
      id: 5,
      purseOfGold: 3,
      happiness: 3,
      hunger: 3,
      thirst: 3,
      nauseaLevel: 3,
      alcoholLevel: 3,
      toilet: 3,
      timeInTavern: '2',
      nauseaTolerance: 3,
      alcoholTolerance: 3,
      gender: 3,
      expGiven: 3,
      consommationStart: '0',
      //idTableRest: 3,
    },
  ];
  tableRests: TableRestModel[] = [
    {
      id: 1,
      numberPlace: 4,
      hygiene: 0,
      posX: 1,
      posY: 1,
      idPlace: 1,
    },
    {
      id: 2,
      numberPlace: 4,
      hygiene: 0,
      posX: 1,
      posY: 1,
      idPlace: 1,
    },
    {
      id: 3,
      numberPlace: 4,
      hygiene: 0,
      posX: 1,
      posY: 1,
      idPlace: 1,
    },
    {
      id: 4,
      numberPlace: 4,
      hygiene: 0,
      posX: 1,
      posY: 1,
      idPlace: 1,
    },
    {
      id: 5,
      numberPlace: 4,
      hygiene: 0,
      posX: 1,
      posY: 1,
      idPlace: 2,
    },
  ];

  tableRestWithCustomer: TableRest[] = [];
  newCustomers: Customer[] = [];
  customerIndexSelected: number = 0;
  tableIndexSelected: number = 0;

  constructor() {}

  ngOnInit(): void {
    let customerTempo = {} as Customer;
    let placeTempo = {} as PlaceModel;

    placeTempo = this.places.find((element) => element.type == 2)!;

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
      this.newCustomers[this.customerIndexSelected].numImg =
        Math.floor(Math.random() * 7) + 1;
      this.tableRestWithCustomer[this.tableIndexSelected].customers?.push(
        this.newCustomers[this.customerIndexSelected]
      );
      this.newCustomers.splice(this.customerIndexSelected, 1);
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
