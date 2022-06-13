import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginPageGuard implements CanActivate, CanLoad {

  constructor(
    private auth: AuthService,
    private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    return true;
  }

  canLoad(): Observable<boolean> | boolean {
    return true;
  }



}
