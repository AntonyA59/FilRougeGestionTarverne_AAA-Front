import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.login(this.connectionForm.value as Player).subscribe();
  }
}
