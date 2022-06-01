import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PromoCarouselComponent } from './components/promo-carousel/promo-carousel.component';

@NgModule({
    declarations: [PromoCarouselComponent],
    imports: [CommonModule, NgbModule],
    exports: [PromoCarouselComponent, RouterModule],
})
export class PromoCarouselModule {}
