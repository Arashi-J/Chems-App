import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { MaterialModule } from 'src/app/material.module'

import { SharedModule } from '../shared/shared.module';

import { MainComponent } from './pages/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AreasCreationComponent } from './pages/areas-creation/areas-creation.component';
import { AreasDetailsComponent } from './pages/areas-details/areas-details.component';
import { AreasListComponent } from './pages/areas-list/areas-list.component';

import { ChemicalsCreationComponent } from './pages/chemicals-creation/chemicals-creation.component';
import { ChemicalsDetailsComponent } from './pages/chemicals-details/chemicals-details.component';
import { ChemicalsListComponent } from './pages/chemicals-list/chemicals-list.component';

import { UsersCreationComponent } from './pages/users-creation/users-creation.component';
import { UsersDetailsComponent } from './pages/users-details/users-details.component';
import { UsersListComponent } from './pages/users-list/users-list.component';


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    AreasCreationComponent,
    AreasDetailsComponent,
    AreasListComponent,
    ChemicalsCreationComponent,
    ChemicalsDetailsComponent,
    ChemicalsListComponent,
    UsersCreationComponent,
    UsersDetailsComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class MainModule { }
