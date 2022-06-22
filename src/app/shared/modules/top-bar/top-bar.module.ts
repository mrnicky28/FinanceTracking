import { AppRoutingModule } from 'src/app/app-routing.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MaterialModule } from '../material/material.module';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
    declarations: [TopBarComponent],
    imports: [
        AppRoutingModule,
        CommonModule,
        RouterModule,
        MaterialModule,
        NgbModule,
        FormsModule,
    ],
    exports: [TopBarComponent],
})
export class TopBarModule {}
