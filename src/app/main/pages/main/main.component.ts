import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  get activeUser() {
    return this.auth.activeUser;
  }

  constructor(
    private router: Router,
    private auth: AuthService) { }

  logout() {

    this.auth.logout();
    this.router.navigateByUrl('/login');

  }

}
