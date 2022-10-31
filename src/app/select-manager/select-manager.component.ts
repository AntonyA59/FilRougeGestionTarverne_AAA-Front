import { Component, OnInit } from '@angular/core';
import { Manager } from '../interfaces/manager';
import { MANAGERS } from '../mock-manager';

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
