import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-promo-carousel',
    templateUrl: './promo-carousel.component.html',
    styleUrls: ['./promo-carousel.component.scss'],
})
export class PromoCarouselComponent {
    showNavigationArrows = false;
    showNavigationIndicators = false;
    images = [944, 1011, 984].map(
        (n) => `https://picsum.photos/id/${n}/900/500`,
    );
    constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }
}
