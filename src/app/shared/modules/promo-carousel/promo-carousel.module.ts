import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PromoCarouselComponent } from './components/promo-carousel/promo-carousel.component';

@NgModule({
    declarations: [PromoCarouselComponent],
    imports: [CommonModule],
    exports: [PromoCarouselComponent],
})
export class PromoCarouselModule {}
