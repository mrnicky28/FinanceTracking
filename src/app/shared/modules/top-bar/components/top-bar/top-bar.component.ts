import { LoginComponent } from 'src/app/auth/components/login/login/login.component';
import { RegisterComponent } from 'src/app/auth/components/register/register/register.component';
import { AuthService } from 'src/app/auth/services/authentication/auth.service';

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
    constructor(
        public dialog: MatDialog,
        private router: Router,
        public authService: AuthService,
    ) {}

    ngOnInit(): void {}

    signIn(): void {
        const dialogConfig = new MatDialogConfig();
        this.dialog.open(LoginComponent);
        this.router.navigate(['/login']);
    }
    signUp(): void {
        this.dialog.open(RegisterComponent);
        this.router.navigate(['/register']);
    }
    logOut(): void {
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/home']);
        });
    }
}
