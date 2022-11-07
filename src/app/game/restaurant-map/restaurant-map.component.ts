import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  selector: 'app-restaurant-map',
  templateUrl: './restaurant-map.component.html',
  styleUrls: ['./restaurant-map.component.css'],
})
export class RestaurantMapComponent implements OnInit {
  customers: Customer[] = [
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
      idTableRest: 2,
      consommationStart: '2',
      name: 'Oscar Ambar',
    },
    {
      id: 1,
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
      idTableRest: 2,
      consommationStart: '0',
      name: 'Anne Ogastric',
    },
  ];
  tableRests = [
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
  ];
  constructor() {}

  ngOnInit(): void {}
}
