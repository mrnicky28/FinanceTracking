import {
    CurrencyConverterService
} from 'src/app/shared/services/currency-converter/currency-converter.service';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-currency-converter',
    templateUrl: './currency-converter.component.html',
    styleUrls: ['./currency-converter.component.scss'],
})
export class CurrencyConverterComponent implements OnInit {
    public amount: number = 1;
    public currenciesFrom = [
        'aed',
        'afn',
        'all',
        'amd',
        'aoa',
        'ars',
        'aud',
        'awg',
        'azn',
        'bam',
        'bgn',
        'bob',
        'brl',
        'byn',
        'cad',
        'cdf',
        'chf',
        'chz',
        'cny',
        'czk',
        'egp',
        'eur',
        'gbp',
        'gel',
        'hkd',
        'huf',
        'inr',
        'iqd',
        'jpy',
        'kzt',
        'ltl',
        'lvl',
        'mdl',
        'mkd',
        'mxn',
        'nzd',
        'pkr',
        'pln',
        'ron',
        'rsd',
        'rub',
        'sek',
        'sgd',
        'tjs',
        'tmt',
        'tnd',
        'try',
        'uah',
        'usd',
        'uzs',
    ];
    public currenciesTo = [
        'aed',
        'afn',
        'all',
        'amd',
        'aoa',
        'ars',
        'aud',
        'awg',
        'azn',
        'bam',
        'bgn',
        'bob',
        'brl',
        'byn',
        'cad',
        'cdf',
        'chf',
        'chz',
        'cny',
        'czk',
        'egp',
        'eur',
        'gbp',
        'gel',
        'hkd',
        'huf',
        'inr',
        'iqd',
        'jpy',
        'kzt',
        'ltl',
        'lvl',
        'mdl',
        'mkd',
        'mxn',
        'nzd',
        'pkr',
        'pln',
        'ron',
        'rsd',
        'rub',
        'sek',
        'sgd',
        'tjs',
        'tmt',
        'tnd',
        'try',
        'uah',
        'usd',
        'uzs',
    ];
    public data: any;
    public valueFrom: any;
    public valueTo: any;
    public result: any;
    public flagFrom: string = 'by'.toLowerCase();
    public flagTo: string = 'us'.toLowerCase();

    public constructor(private currencyConverterService: CurrencyConverterService) {}

    ngOnInit(): void {
        this.getCountriesFrom();
        this.getCountriesTo();
        this.convertCurrency('byn', 'usd');
    }

    getCountriesFrom() {
        this.currenciesFrom = this.currenciesFrom.map((value) => value.toUpperCase());
    }

    getCountriesTo() {
        this.currenciesTo = this.currenciesTo.map((value) => value.toUpperCase());
    }

    convertCurrency(from: any, to: any) {
        this.currencyConverterService.convert(from, to).subscribe((data) => {
            this.data = Object.entries(data).map((x) => x[1]);
            this.valueFrom = Object.entries(this.data[4]).map((x) => x[1])[0];
            this.valueTo = Object.entries(this.data[4]).map((x) => x[1])[1];
            this.result = this.amount * (this.valueTo / this.valueFrom);
        });
    }

    getFlag(flag?: any, to?: any) {
        this.flagFrom = flag.toString().slice(0, -1).toLowerCase();
        this.flagTo = to.toString().slice(0, -1).toLowerCase();
    }
}
