import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { CryptocurrencyListComponent } from './components/cryptocurrency-list.component';

const routes: Routes = [
    { path: 'cryptocurrency-list', component: CryptocurrencyListComponent },
];

@NgModule({
    declarations: [CryptocurrencyListComponent],
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CryptocurrencyListModule {}
