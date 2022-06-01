import { AppRoutingModule } from 'src/app/app-routing.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material/material.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
    declarations: [ProfilePageComponent],
    imports: [
        AppRoutingModule,
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [ProfilePageComponent],
})
export class ProfilePageModule {}
