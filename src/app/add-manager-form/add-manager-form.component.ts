import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManagerService } from '../services/manager/manager.service';

@Component({
  selector: 'app-add-manager-form',
  templateUrl: './add-manager-form.component.html',
  styleUrls: ['./add-manager-form.component.css'],
})
export class AddManagerFormComponent implements OnInit {
  manager = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  emailPlayer = sessionStorage.getItem('email');
  constructor(private managerService: ManagerService) {}

  onSubmit() {
    const val = this.manager.value;
    if (val.name) {
      this.managerService.addManager(val.name, this.emailPlayer!);
    }
    this.manager.reset();
  }
  ngOnInit(): void {
  }
}
