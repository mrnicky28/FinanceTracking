import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PromoCarouselModule } from '../promo-carousel/promo-carousel.module';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
    declarations: [TopBarComponent],
    imports: [CommonModule, PromoCarouselModule],
    exports: [TopBarComponent],
})
export class TopBarModule {}
