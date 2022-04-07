import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import {
    BackendErrorMessagesModule
} from '../shared/modules/backend-error-messages/backend-error-messages.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/register/register/register.component';
import { RegisterEffect } from './store/effects/register.effect';
import { reducers } from './store/reducers';

const routes: Routes = [
    // {
    //     path: 'register',
    //     component: RegisterComponent,
    // },
    // {
    //     path: 'login',
    //     component: LoginComponent,
    // },
];

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [
        CommonModule,
        MaterialModule,
        MatDialogModule,
        NgbModule,
        ReactiveFormsModule,
        BackendErrorMessagesModule,
        LoadingModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([RegisterEffect]),
    ],
    exports: [LoginComponent, RegisterComponent],
    providers: [NgbActiveModal],
})
export class AuthModule {}
