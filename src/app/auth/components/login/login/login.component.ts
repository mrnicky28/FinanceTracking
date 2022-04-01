import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { RegisterComponent } from '../../register/register/register.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(private dialog: MatDialog, private router: Router) {}

    ngOnInit(): void {
        console.log('23235');
    }
    onClose(): void {
        this.dialog.closeAll();
        console.log('erg');
        this.router.navigate(['']);
    }
    redirectToSignUp(): void {
        this.dialog.closeAll();
        this.router.navigate(['/register']);
        this.dialog.open(RegisterComponent);
    }
}
