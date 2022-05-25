import { Observable } from 'rxjs';
import { LoginRequestinterface } from 'src/app/auth/interfaces/loginRequest.interface';
import { loginAction } from 'src/app/auth/store/actions/login.action';
import {
    isLoadingSelector, isSubmittingSelector, validationErrorsSelector
} from 'src/app/auth/store/selector';

import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { select, Store } from '@ngrx/store';

import { RegisterComponent } from '../../register/register/register.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    isSubmitting$!: Observable<boolean>;
    isLoading$!: Observable<boolean>;
    backendErrors$!: Observable<string[] | null>;



    constructor(
        private dialog: MatDialog,
        private router: Router,
        private fb: FormBuilder,
        private store: Store,
        private toast: HotToastService,
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
        this.loginForm = this.fb.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(10)]],
        });
    }

    onSubmit(): void {
        if (this.loginForm.invalid) return;
        const request: LoginRequestinterface = {
            ...this.loginForm.value,
        };
        this.store.dispatch(loginAction({ request }));
        this.loginForm.reset();
        this.router.navigate(['/home']);
    }

    onClose(): void {
        this.dialog.closeAll();
    }
    redirectToSignUp(): void {
        this.dialog.closeAll();
        this.dialog.open(RegisterComponent);
    }
}
