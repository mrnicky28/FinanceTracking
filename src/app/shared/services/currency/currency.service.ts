import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CurrencyService {
    private selectedCurrency$: BehaviorSubject<string> = new BehaviorSubject<string>(
        'USD',
    );
    constructor() {}

    getCurrency() {
        return this.selectedCurrency$.asObservable();
    }
    setCurrency(currency: string) {
        this.selectedCurrency$.next(currency);
    }
}
