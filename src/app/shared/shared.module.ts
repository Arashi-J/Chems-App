import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from 'src/app/material.module';
import { TableComponent } from './table/table.component'
import { MainRoutingModule } from '../main/main-routing.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { DatesPipe } from './pipes/dates.pipe';




@NgModule({
  declarations: [
    NavbarComponent,
    TableComponent,
    SpinnerComponent,
    DatesPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MainRoutingModule
  ],
  exports: [
    NavbarComponent,
    TableComponent,
    SpinnerComponent,
    DatesPipe
  ]
})
export class SharedModule { }
