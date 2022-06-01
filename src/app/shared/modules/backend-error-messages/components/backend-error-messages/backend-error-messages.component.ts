import { Subject } from 'rxjs';
import { validationErrorsSelector } from 'src/app/auth/store/selector';

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

@Component({
    selector: 'app-backend-error-messages',
    templateUrl: './backend-error-messages.component.html',
    styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
    public error$: Subject<string> = new Subject<string>();

    errorMessages$: any;
    errorMessage!: string[];
    errors: string[] = [];

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.errorMessages$ = this.store.pipe(select(validationErrorsSelector));
        this.handleError();
    }

    handleError(): void {
        this.errorMessages$.subscribe(
            (response: string[]) => (this.errorMessage = response),
        );

        switch (this.errorMessage[0]) {
            case 'auth/invalid-email':
                this.error$.subscribe((response) => this.errors.push(response));
                this.error$.next('That email does not exist. Enter the email again.');
                break;

            case 'auth/email-already-in-use':
                this.error$.subscribe((response) => this.errors.push(response));
                this.error$.next('Such an email already exists.');
                break;

            case 'auth/user-not-found':
                this.error$.subscribe((response) => this.errors.push(response));
                this.error$.next('There is no such user.');
                break;

            case 'auth/wrong-password':
                this.error$.subscribe((response) => this.errors.push(response));
                this.error$.next('The password you entered is incorrect.');
                break;
        }
    }
}
