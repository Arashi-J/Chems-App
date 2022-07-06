import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, exhaustMap, catchError, of } from 'rxjs';

import { AuthService } from 'src/app/core/services/auth.service';
import * as actions from '../actions';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {


    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.login),
            exhaustMap(({ username, password }) =>
                this.authSrv.login(username, password).pipe(
                    map((response) => actions.validateToken({ response })),
                    catchError(error => of(actions.loginError({ payload: error }))))
            ),
        )
    );

    validateToken$ = createEffect(() => 
        this.actions$.pipe(
            ofType(actions.validateToken),
            // exhaustMap(({}))
        )
    
    )


    constructor(
        private actions$: Actions,
        private authSrv: AuthService,
        private router: Router
    ) { }

}