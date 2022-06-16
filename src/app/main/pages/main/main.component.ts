import { Component, OnDestroy } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy {

  activeUrl!: string;

  urlSubscription = this.router.events
  .pipe(
    filter((event: any) => event instanceof NavigationEnd),
    map(event => event.url),
  )
  .subscribe(url => {
        
    if(/areas/.test(url)){
      this.activeUrl = 'areas'
    }else if(/chemicals/.test(url)){
      this.activeUrl = 'chemicals'
    }else if (/users/.test(url)){
      this.activeUrl = 'users'
    }
  });

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

  sidenavItems = [this.sidenavAreasItems, this.sidenavChemicalsItems, this.sidenavUserssItems];

  constructor(private router: Router) {

  }


  ngOnDestroy(): void {
    this.urlSubscription.unsubscribe()
  }

}
