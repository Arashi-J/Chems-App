import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from 'src/app/material.module';
import { TableComponent } from './table/table.component'
import { MainRoutingModule } from '../main/main-routing.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { DatesPipe } from './pipes/dates.pipe';
import { ChipListInputComponent } from './chip-list-input/chip-list-input.component';
import { BasicInputComponent } from './basic-input/basic-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectionListComponent } from './selection-list/selection-list.component';




@NgModule({
  declarations: [
    NavbarComponent,
    TableComponent,
    SpinnerComponent,
    DatesPipe,
    ChipListInputComponent,
    BasicInputComponent,
    SelectionListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MainRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    BasicInputComponent,
    ChipListInputComponent,
    NavbarComponent,
    TableComponent,
    SelectionListComponent,
    SpinnerComponent,
    DatesPipe
  ]
})
export class SharedModule { }
