import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from 'src/app/material.module';
import { TableComponent } from './table/table.component'
import { MainRoutingModule } from '../main/main-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MainRoutingModule
  ],
  exports: [
    NavbarComponent,
    TableComponent
  ]
})
export class SharedModule { }
