import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  sidenavMode: MatDrawerMode = 'side';

  sidenavItems = [
    [
      [
        { item: 'Añadir Sustancia Química', link: '/main/chemicals', icon: 'add', roles: [''] },
        { item: 'Lista Sustancias Químicas', link: '/main/areas', icon: 'list', roles: [''] },
      ],
      [
        { item: 'Añadir', link: '/main/chemicals', icon: 'add', roles: [''] },
        { item: 'Lista', link: '/main/areas', icon: 'list', roles: [''] },
      ],
      [
        { item: 'Añadir', link: '/main/chemicals', icon: 'add', roles: [''] },
        { item: 'Lista', link: '/main/areas', icon: 'list', roles: [''] },
      ],
    ]
  ];



}
