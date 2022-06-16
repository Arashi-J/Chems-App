import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AreasCreationComponent } from './pages/areas-creation/areas-creation.component';
import { AreasListComponent } from './pages/areas-list/areas-list.component';
import { AreasDetailsComponent } from './pages/areas-details/areas-details.component';

import { ChemicalsCreationComponent } from './pages/chemicals-creation/chemicals-creation.component';
import { ChemicalsDetailsComponent } from './pages/chemicals-details/chemicals-details.component';
import { ChemicalsListComponent } from './pages/chemicals-list/chemicals-list.component';

import { UsersCreationComponent } from './pages/users-creation/users-creation.component';
import { UsersDetailsComponent } from './pages/users-details/users-details.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'areas',
        children: [
          {path: '', component: AreasListComponent},
          {path: 'new', component: AreasCreationComponent},
          {path: ':id', component: AreasDetailsComponent},
        ]
      },
      {
        path: 'chemicals',
        children: [
          {path: '', component: ChemicalsListComponent},
          {path: 'new', component: ChemicalsCreationComponent},
          {path: ':id', component: ChemicalsDetailsComponent},
        ]
      },
      {
        path: 'users',
        children: [
          { path: '', component: UsersListComponent },
          { path: 'new', component: UsersCreationComponent },
          { path: ':id', component: UsersDetailsComponent },
        ]
      },
      { path: '', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
