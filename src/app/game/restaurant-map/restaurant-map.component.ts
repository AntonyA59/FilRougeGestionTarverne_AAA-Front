import { Component, OnInit } from '@angular/core';
import { Customer, CustomerModel } from 'src/app/interfaces/customer';
import { TableRest, TableRestModel } from 'src/app/interfaces/table-rest';

@Component({
  selector: 'app-restaurant-map',
  templateUrl: './restaurant-map.component.html',
  styleUrls: ['./restaurant-map.component.css'],
})
export class RestaurantMapComponent implements OnInit {
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
      idPlace: 1,
    },
  ];

  tableRestWithCustomer: TableRest[] = [];
  constructor() {}

  ngOnInit(): void {
    this.tableRestWithCustomer = this.tableRests;
    let customerTempo = {} as Customer;

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
  }
}
