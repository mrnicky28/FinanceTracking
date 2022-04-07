import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { CurrentUserInterface } from 'src/app/shared/interfaces/currentUser.interface';
import { PersistanceService } from 'src/app/shared/services/persistance/persistance.service';

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthService } from '../../services/authentication/auth.service';
import {
    registerAction, registerFailureAction, registerSuccessAction
} from '../actions/register.action';

@Injectable()
export class RegisterEffect {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistanceService: PersistanceService,
        private router: Router,
        public dialog: MatDialog,
    ) {}

    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(registerAction),
            switchMap(({ request }) => {
                return this.authService.register(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        this.persistanceService.set(
                            'accessToken',
                            currentUser.user.accessToken,
                        );
                        return registerSuccessAction({ currentUser });
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(
                            registerFailureAction({
                                error: [
                                    errorResponse.message.split('(')[1].split(')')[0],
                                ],
                            }),
                        );
                    }),
                );
            }),
        ),
    );

    redirectAfterSubmit$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(registerSuccessAction),
                tap(() => {
                    this.router.navigate(['/']);
                    this.dialog.closeAll();
                }),
            ),
        { dispatch: false },
    );
}
