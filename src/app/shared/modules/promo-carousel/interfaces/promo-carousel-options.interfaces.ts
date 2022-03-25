import { PromoCarouselSlide } from './promo-carousel-slide.interfaces';

export interface PromoCarouselOptions {
    [key: string]: any;
    slides: PromoCarouselSlide[];
    active: number;
    hide: number | null;
    interval: number;
    indicators: boolean;
    scrollAnchor?: string;
}
