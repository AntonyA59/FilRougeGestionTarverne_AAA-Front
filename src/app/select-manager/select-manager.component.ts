import { Component, OnInit } from '@angular/core';
import { ManagerModel, MANAGERS } from '../interfaces/manager';

@Component({
  selector: 'app-select-manager',
  templateUrl: './select-manager.component.html',
  styleUrls: ['./select-manager.component.css'],
})
export class SelectManagerComponent implements OnInit {
  managers = MANAGERS;
  constructor() {}

  ngOnInit(): void {}
}
