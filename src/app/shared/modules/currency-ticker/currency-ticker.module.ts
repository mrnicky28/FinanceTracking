import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CurrencyTickerComponent } from './components/currency-ticker/currency-ticker.component';

@NgModule({
    declarations: [CurrencyTickerComponent],
    imports: [CommonModule],
    exports: [CurrencyTickerComponent],
})
export class CurrencyTickerModule {}
