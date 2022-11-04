import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Manager } from '../interfaces/manager';
import { ManagerService } from '../services/manager/manager.service';

@Component({
  selector: 'app-add-manager-form',
  templateUrl: './add-manager-form.component.html',
  styleUrls: ['./add-manager-form.component.css'],
})
export class AddManagerFormComponent implements OnInit {
  manager = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private managerService: ManagerService) {}

  onSubmit() {
    this.managerService.addManager(this.manager.value as Manager);
    this.manager.reset();
  }
  ngOnInit(): void {}
}
