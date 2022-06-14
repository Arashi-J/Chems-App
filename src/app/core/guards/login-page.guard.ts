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
    this.auth.not_active_token()
    return true

    // return this.auth.active_token()
    //   .pipe(
    //     tap(valid => {
    //       if (!valid) {
    //         this.router.navigateByUrl('/main');
    //       }
    //     })
    //   );

  }

  canLoad(): Observable<boolean> | boolean {
    return true
    // return this.auth.active_token()
    //   .pipe(
    //     tap(valid => {
    //       if (!valid) {
    //         this.router.navigateByUrl('/main');
    //       }
    //     })
    //   );
  }



}
