import { Observable } from 'rxjs';
import { RegisterRequestInterface } from 'src/app/auth/interfaces/registerRequest.interface';
import { registerAction } from 'src/app/auth/store/actions/register.action';
import {
    isLoadingSelector, isSubmittingSelector, validationErrorsSelector
} from 'src/app/auth/store/selector';
import { MatchPasswordValidator } from 'src/app/auth/validators/matchPassword.validator';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { LoginComponent } from '../../login/login/login.component';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    registerForm!: FormGroup;
    isSubmitting$!: Observable<boolean>;
    isLoading$!: Observable<boolean>;
    backendErrors$!: Observable<string[] | null>;

    constructor(
        private fb: FormBuilder,
        private store: Store,
        private dialog: MatDialog,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.initializeForm();
        this.initializeValues();
    }

    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    }

    initializeForm(): void {
        this.registerForm = this.fb.group(
            {
                username: [null, [Validators.required, Validators.maxLength(32)]],
                email: [null, [Validators.required, Validators.email]],
                password: [null, [Validators.required, Validators.minLength(10)]],
                confirmPassword: [null, [Validators.required]],
            },
            {
                validators: [
                    MatchPasswordValidator.matchPassword('password', 'confirmPassword'),
                ],
            },
        );
    }

    onSubmit(): void {
        if (this.registerForm.invalid) return;

        const request: RegisterRequestInterface = {
            ...this.registerForm.value,
        };
        this.store.dispatch(registerAction({ request }));
        this.registerForm.reset();
        this.router.navigate(['/home']);
        this.dialog.closeAll();
    }

    onClose(): void {
        this.dialog.closeAll();
    }

    redirectToLogin(): void {
        this.dialog.closeAll();
        this.dialog.open(LoginComponent);
    }
}
