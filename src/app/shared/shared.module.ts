import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from '../main/main-routing.module';
import { MaterialModule } from 'src/app/material.module';

import { BaseUrlPipe } from './pipes/base-url.pipe';
import { DatesPipe } from './pipes/dates.pipe';

import { BasicInputComponent } from './basic-input/basic-input.component';
import { ChipListInputComponent } from './chip-list-input/chip-list-input.component';
import { InputArrayComponent } from './input-array/input-array.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TableComponent } from './table/table.component'




@NgModule({
  declarations: [
    BaseUrlPipe,
    DatesPipe,
    BasicInputComponent,
    ChipListInputComponent,
    InputArrayComponent,
    NavbarComponent,
    SelectionListComponent,
    SpinnerComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MainRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    BaseUrlPipe,
    DatesPipe,
    BasicInputComponent,
    ChipListInputComponent,
    InputArrayComponent,
    NavbarComponent,
    SelectionListComponent,
    SpinnerComponent,
    TableComponent,
  ]
})
export class SharedModule { }
