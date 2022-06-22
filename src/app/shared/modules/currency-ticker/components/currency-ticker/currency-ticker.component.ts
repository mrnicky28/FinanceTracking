import {
    CurrensiesDataService
} from 'src/app/shared/services/currencies-data/currensies-data.service';
import { CurrencyService } from 'src/app/shared/services/currency/currency.service';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-currency-ticker',
    templateUrl: './currency-ticker.component.html',
    styleUrls: ['./currency-ticker.component.scss'],
})
export class CurrencyTickerComponent implements OnInit {
    currencySymbol: string = 'USD';

    constructor(
        private currencyDataService: CurrensiesDataService,
        private currencyService: CurrencyService,
    ) {}

    currensies: any;

    ngOnInit(): void {
        this.getCurrencyDataTicker();
        this.currencyService.getCurrency().subscribe((val) => {
            this.currencySymbol = val;
            console.log('log', this.currencySymbol);

            this.getCurrencyDataTicker();
        });
    }
    getCurrencyDataTicker() {
        this.currencyDataService.getCurrencies(this.currencySymbol).subscribe((res) => {
            this.currensies = res.slice(0, 20);
            console.log(this.currensies);
        });
    }
}
