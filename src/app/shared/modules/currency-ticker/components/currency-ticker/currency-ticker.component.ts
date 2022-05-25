import {
    CurrensiesDataService
} from 'src/app/shared/services/currencies-data/currensies-data.service';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-currency-ticker',
    templateUrl: './currency-ticker.component.html',
    styleUrls: ['./currency-ticker.component.scss'],
})
export class CurrencyTickerComponent implements OnInit {
    constructor(private currencyDataService: CurrensiesDataService) {}
    currensies: any;

    ngOnInit(): void {
        this.getCurrencyDataTicker();
    }
    getCurrencyDataTicker() {
        this.currencyDataService.getCurrencies('usd').subscribe((res) => {
            this.currensies = res;
        });
    }
}
