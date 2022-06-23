import { Component, OnDestroy } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnDestroy {

  activeUrl!: string;

  sidenavMode: MatDrawerMode = 'side';

  sidenavAreasItems = [
    { item: 'ver áreas', link: 'areas', icon: 'list', roles: [''] },
    { item: 'añadir área', link: 'areas/new', icon: 'add', roles: [''] },
  ];

  sidenavChemicalsItems = [
    { item: 'ver sustancias químicas', link: 'chemicals', icon: 'list', roles: [''] },
    { item: 'añadir sustancia química', link: 'chemicals/new', icon: 'add', roles: [''] },
    { item: 'aprobar sustancia química', link: '', icon: 'done', roles: [''] },
  ];

  sidenavUsersItems = [
    { item: 'ver usuarios', link: 'users', icon: 'list', roles: [''] },
    { item: 'añadir usuario', link: 'users/new', icon: 'add', roles: [''] },
  ];

  sidenavItems!: any[];

  urlSubscription = this.router.events
    .pipe(
      filter((event: any) => event instanceof NavigationEnd),
      map(event => event.url),
    )
    .subscribe(url => {

      if (/areas/.test(url)) {
        this.activeUrl = 'areas';
        this.sidenavItems = this.sidenavAreasItems;
      } else if (/chemicals/.test(url)) {
        this.activeUrl = 'chemicals';
        this.sidenavItems = this.sidenavChemicalsItems;
      } else if (/users/.test(url)) {
        this.activeUrl = 'users';
        this.sidenavItems = this.sidenavUsersItems;
      } else {
        this.activeUrl = '';
        this.sidenavItems = []
      }
    });

  constructor(private router: Router) { }


  ngOnDestroy(): void {
    this.urlSubscription.unsubscribe();
  }

}
