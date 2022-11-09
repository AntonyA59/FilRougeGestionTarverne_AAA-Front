import { Component, OnInit } from '@angular/core';
import { ManagerModel } from '../interfaces/manager';
import { ManagerService } from '../services/manager/manager.service';

@Component({
  selector: 'app-select-manager',
  templateUrl: './select-manager.component.html',
  styleUrls: ['./select-manager.component.css'],
})
export class SelectManagerComponent implements OnInit {
  managers: ManagerModel[] = [];
  constructor(private managerService: ManagerService) {}

  ngOnInit(): void {
    this.managerService.listManager().subscribe((response) => {
      this.managers = response;
    });
  }
}
