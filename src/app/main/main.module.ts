import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { AreasListComponent } from './pages/areas-list/areas-list.component';
import { ChemicalsListComponent } from './pages/chemicals-list/chemicals-list.component';


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    UsersListComponent,
    AreasListComponent,
    ChemicalsListComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class MainModule { }
