import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  formRegistration = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    nickname: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30),
    ]),
  });

  constructor() {}
  get f() {
    return this.formRegistration.controls;
  }
  onSubmit() {}
  ngOnInit(): void {}
}
