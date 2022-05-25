import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CurrencyTickerModule } from '../currency-ticker/currency-ticker.module';
import { MaterialModule } from '../material/material.module';
import { PromoCarouselModule } from '../promo-carousel/promo-carousel.module';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
    declarations: [TopBarComponent],
    imports: [
        CommonModule,
        RouterModule,
        PromoCarouselModule,
        CurrencyTickerModule,
        MaterialModule,
        NgbModule,
    ],
    exports: [TopBarComponent],
})
export class TopBarModule {}
