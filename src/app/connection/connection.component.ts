import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JwtToken } from '../interfaces/Jwt-Token';
import { Player } from '../interfaces/player';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css'],
})
export class ConnectionComponent implements OnInit {
  connectionForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  jwtToken?: JwtToken;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    const val = this.connectionForm.value;
    if (val.email && val.password) {
      this.authService.login(val.email, val.password).subscribe((data) => {
        this.jwtToken = data;
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('refreshToken', data.refreshToken);
      });
    }
  }
}
