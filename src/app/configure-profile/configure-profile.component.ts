import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { PlayerService } from '../services/player/player.service';

@Component({
  selector: 'app-configure-profile',
  templateUrl: './configure-profile.component.html',
  styleUrls: ['./configure-profile.component.css'],
})
export class ConfigureProfileComponent implements OnInit {
  submitted: boolean = false;
  modifForm = new FormGroup({
    emailModified: new FormControl('', [Validators.email]),
    nickname: new FormControl('', [
      Validators.minLength(8),
      Validators.maxLength(30),
    ]),
  });
  constructor(
    private playerService: PlayerService,
    private router: Router,
    private authSevice: AuthService
  ) {}

  get f() {
    return this.modifForm.controls;
  }

  onSubmit() {
    const val = this.modifForm.value;
    this.submitted = true;
    if (this.modifForm.valid) {
      if (val.emailModified && !val.nickname) {
        this.playerService.modifEmail(val.emailModified);
        this.authSevice.logOut();
      } else if (val.emailModified && val.nickname) {
        this.playerService.modifEmail(val.emailModified);
        this.playerService.modifNickname(val.nickname);
        this.authSevice.logOut();
      } else if (val.nickname && !val.emailModified) {
        this.playerService.modifNickname(val.nickname);
        setTimeout(() => {
          this.router.navigateByUrl('/home/menu');
        }, 1000);
      }
    }
  }
  ngOnInit(): void {}
}
