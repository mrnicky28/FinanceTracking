import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CryptocurrencyDetailComponent } from './components/cryptocurrency-detail.component';

const routes: Routes = [
    { path: 'cryptocurrency-detail', component: CryptocurrencyDetailComponent },
];

@NgModule({
    declarations: [CryptocurrencyDetailComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CryptocurrencyDetailModule {}
