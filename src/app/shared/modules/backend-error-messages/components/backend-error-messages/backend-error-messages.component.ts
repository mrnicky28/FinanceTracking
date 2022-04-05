import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { validationErrorsSelector } from 'src/app/auth/store/selector';

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
                this.error$.next('Некорректный email.');
                break;
        }
    }
}
