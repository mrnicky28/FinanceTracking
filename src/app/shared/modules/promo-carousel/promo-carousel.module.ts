import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PromoCarouselComponent } from './components/promo-carousel/promo-carousel.component';

const routes: Routes = [
    { path: 'home', component: PromoCarouselComponent },
    { path: '', component: PromoCarouselComponent },
];

@NgModule({
    declarations: [PromoCarouselComponent],
    imports: [CommonModule, NgbModule, RouterModule.forChild(routes)],
    exports: [PromoCarouselComponent, RouterModule],
})
export class PromoCarouselModule {}
