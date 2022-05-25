import { of } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { catchError, map, tap } from 'rxjs/operators';
import { CurrentUserInterface } from 'src/app/shared/interfaces/currentUser.interface';
import { PersistanceService } from 'src/app/shared/services/persistance/persistance.service';

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthService } from '../../services/authentication/auth.service';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';

@Injectable()
export class LoginEffect {
    constructor(
        private router: Router,
        private dialog: MatDialog,
        private actions$: Actions,
        private authService: AuthService,
        private persistanceService: PersistanceService,
        private toast: HotToastService,
    ) {}

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginAction),
            switchMap(({ request }) => {
                return this.authService
                    .login(request)
                    .pipe(
                        this.toast.observe({
                            success: 'Logged in successfully',
                            loading: 'Loggung in...',
                            error: 'There was an error',
                        }),
                    )
                    .pipe(
                        map((currentUser: CurrentUserInterface) => {
                            this.persistanceService.set(
                                'accessToken',
                                currentUser.user.accessToken,
                            );
                            return loginSuccessAction({ currentUser });
                        }),
                        catchError((errorResponse: HttpErrorResponse) => {
                            return of(
                                loginFailureAction({
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
                ofType(loginSuccessAction),
                tap(() => {
                    this.router.navigate(['/']);
                    this.dialog.closeAll();
                }),
            ),
        { dispatch: false },
    );
}
