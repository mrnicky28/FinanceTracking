import { AppRoutingModule } from 'src/app/app-routing.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
    AmazingFeaturesSectionModule
} from '../../modules/amazing-features/amazing-features-section.module';
import { CurrencyTickerModule } from '../../modules/currency-ticker/currency-ticker.module';
import { MaterialModule } from '../../modules/material/material.module';
import { PromoCarouselModule } from '../../modules/promo-carousel/promo-carousel.module';
import { HomePageComponent } from './components/home-page.component';

@NgModule({
    declarations: [HomePageComponent],
    imports: [
        AppRoutingModule,
        CommonModule,
        PromoCarouselModule,
        MaterialModule,
        CurrencyTickerModule,
        AmazingFeaturesSectionModule,
    ],
    exports: [HomePageComponent],
})
export class HomePageModule {}
