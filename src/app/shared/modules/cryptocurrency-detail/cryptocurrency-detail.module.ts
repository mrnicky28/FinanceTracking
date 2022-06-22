import { NgChartsModule } from 'ng2-charts';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CryptocurrencyDetailComponent } from './components/cryptocurrency-detail.component';

@NgModule({
    declarations: [CryptocurrencyDetailComponent],
    imports: [CommonModule, NgChartsModule],
    exports: [RouterModule],
})
export class CryptocurrencyDetailModule {}
