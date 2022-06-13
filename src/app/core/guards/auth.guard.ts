import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private auth: AuthService,
    private router: Router) { }


  canActivate(): Observable<boolean> | boolean {
    // return this.auth.validate_token()
    //   .pipe(
    //     tap(valid => {
    //       if (!valid) {
    //         this.router.navigateByUrl('/login');
    //       }
    //     })
    //   );
    const result = this.auth.validate_token()

    return result;

  }
  canLoad(): Observable<boolean> | boolean {
    // return this.auth.validate_token()
    //   .pipe(
    //     tap(valid => {
    //       if (!valid) {
    //         this.router.navigateByUrl('/login');
    //       }
    //     })
    //   );

    return this.auth.validate_token();
  }
}
