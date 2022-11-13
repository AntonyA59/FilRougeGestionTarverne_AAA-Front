import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { confirmPasswordValidator } from '../confirmed-password';
import { Player } from '../interfaces/player';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  submitted?: boolean;
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
      confirmPasswordValidator('matchingPassword', true),
    ]),
    matchingPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30),
      confirmPasswordValidator('password'),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  get f() {
    return this.formRegistration.controls;
  }
  onSubmit() {
    const val = this.formRegistration.value;
    this.authService
      .register(this.formRegistration.value as Player)
      .subscribe();
    this.submitted = true;
    setTimeout(() => {
      if (val.email && val.password)
        this.authService.login(val.email, val.password).subscribe((data) => {
          sessionStorage.setItem('accessToken', data.accessToken);
          sessionStorage.setItem('refreshToken', data.refreshToken);
          this.router.navigateByUrl('/home/menu');
        });
    }, 500);
  }
  ngOnInit(): void {}
}
