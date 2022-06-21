import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MaterialModule } from 'src/app/material.module'
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginFormComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
