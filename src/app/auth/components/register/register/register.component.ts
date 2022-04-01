import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { LoginComponent } from '../../login/login/login.component';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private dialog: MatDialog,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.initializeForm();
    }

    initializeForm(): void {
        this.form = this.fb.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    onSubmit(): void {
        console.log(this.form.value);
    }

    onClose(): void {
        this.dialog.closeAll();
        this.router.navigate(['']);
    }
    redirectToLogin(): void {
        this.dialog.closeAll();
        this.router.navigate(['/login']);
        this.dialog.open(LoginComponent);
    }
}
