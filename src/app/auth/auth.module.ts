import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from '../app-routing.module';
import { BackendErrorMessagesModule } from '../shared/modules/backend-error-messages/backend-error-messages.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import { PersistanceService } from '../shared/services/persistance/persistance.service';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/register/register/register.component';
import { LoginEffect } from './store/effects/login.effect';
import { RegisterEffect } from './store/effects/register.effect';
import { reducers } from './store/reducers';

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [
        AppRoutingModule,
        CommonModule,
        MaterialModule,
        MatDialogModule,
        NgbModule,
        ReactiveFormsModule,
        BackendErrorMessagesModule,
        LoadingModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    ],
    exports: [LoginComponent, RegisterComponent],
    providers: [NgbActiveModal, PersistanceService],
})
export class AuthModule {}
