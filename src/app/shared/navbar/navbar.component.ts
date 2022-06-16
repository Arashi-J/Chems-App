import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  get activeUser() {
    return this.auth.activeUser;
  }

  menuItems = [
    { item: 'químicos', link: '/main/chemicals', icon: 'science', roles: [''] },
    { item: 'áreas', link: '/main/areas', icon: 'badge', roles: [''] },
    { item: 'usuarios', link: '/main/users', icon: 'person', roles: [''] },
  ];

  @Input() url!: string

  @Output() onMenuButton = new EventEmitter<void>();



  constructor(
    private router: Router,
    private auth: AuthService) { }


  sidenavToggle() {
    this.onMenuButton.emit();
  }

  navigateTo(url: string = '/main') {
    this.router.navigateByUrl(url)
  }

  logout() {

    this.auth.logout();
    this.router.navigateByUrl('/login');

  }
}
