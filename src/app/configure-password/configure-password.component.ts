import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { confirmPasswordValidator } from '../confirmed-password';
import { PlayerService } from '../services/player/player.service';

@Component({
  selector: 'app-configure-password',
  templateUrl: './configure-password.component.html',
  styleUrls: ['./configure-password.component.css'],
})
export class ConfigurePasswordComponent implements OnInit {
  submitted: boolean = false;
  modifMdp = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30),
      confirmPasswordValidator('confirmPassword', true),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30),
      confirmPasswordValidator('password'),
    ]),
  });

  constructor(private playerService: PlayerService, private router: Router) {}

  get f() {
    return this.modifMdp.controls;
  }

  onSubmit() {
    const val = this.modifMdp.value;
    this.submitted = true;
    if (this.modifMdp.valid) {
      if (val.password && val.confirmPassword) {
        this.playerService.modifPassword(val.password);
        this.router.navigateByUrl('/home/menu');
      }
    }
  }
  ngOnInit(): void {}
}
