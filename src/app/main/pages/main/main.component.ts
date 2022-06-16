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

  sidenavAreasItems = [
    { item: 'Añadir Área', link: 'areas/new', icon: 'add', roles: [''] },
    { item: 'Ver Áreas', link: 'areas', icon: 'list', roles: [''] },
  ];

  sidenavChemicalsItems = [
    { item: 'Añadir Sustancia Química', link: 'chemicals/new', icon: 'add', roles: [''] },
    { item: 'Ver Sustancias Químicas', link: 'chemicals', icon: 'list', roles: [''] },
  ];

  sidenavUserssItems = [
    { item: 'Añadir Usuario', link: 'users/new', icon: 'add', roles: [''] },
    { item: 'Ver Usuarios', link: 'users', icon: 'list', roles: [''] },
  ];

  sidenavItems = [this.sidenavAreasItems, this.sidenavChemicalsItems, this.sidenavUserssItems]

  // navigateTo(url: string = '/main'){
  //   this.router.navigateByUrl(url)
  // }


}
