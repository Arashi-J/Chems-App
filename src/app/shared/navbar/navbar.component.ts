import { Component, EventEmitter, Output } from '@angular/core';
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
    { item: 'Químicos', link: '/main/chemicals', icon: 'science', roles: [''] },
    { item: 'Areas', link: '/main/areas', icon: 'badge', roles: [''] },
    { item: 'Usuarios', link: '/main/users', icon: 'person', roles: [''] },
  ];

  @Output() onMenuButton = new EventEmitter<void>()

  constructor(
    private router: Router,
    private auth: AuthService) { }

  sidenavToggle (){
    this.onMenuButton.emit()
  }

  navigateTo(url: string = '/main'){
    this.router.navigateByUrl(url)
  }

  logout() {

    this.auth.logout();
    this.router.navigateByUrl('/login');

  }
}
