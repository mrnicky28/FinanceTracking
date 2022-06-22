import { from } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CurrencyConverterService {
    countries!: string[];
    url: string =
        // 'https://api.apilayer.com/fixer/symbols';
        // 'https://api.fastforex.io/convert?from=USD&to=EUR&amount=123&api_key=a601de20ce-d8099bbaaf-rd4kag';
        'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';

    // a601de20ce-d8099bbaaf-rd4kag

    constructor(private http: HttpClient) {}

    getCountries() {
        {
            // "all": "Albanian lek",
            // "amd": "Armenian dram",
            // "ang": "Netherlands Antillean Guilder",
            // "aoa": "Angolan kwanza",
            // "ars": "Argentine peso",
            // "aud": "Australian dollar",
            // "awg": "Aruban florin",
            // "azn": "Azerbaijani manat",
            // "bam": "Bosnia-Herzegovina Convertible Mark",
            // "bgn": "Bulgarian lev",
            // "bob": "Bolivian boliviano",
            // "brl": "Brazilian real",
            // "byn": "New Belarusian Ruble",
            // "cad": "Canadian dollar",
            // "cdf": "Congolese franc",
            // "chf": "Swiss franc",
            // "chz": "Chiliz",
            // "cny": "Chinese Yuan",
            // "czk": "Czech koruna",
            // "egp": "Egyptian pound",
            // "eur": "Euro",
            // "gbp": "Pound sterling",
            // "gel": "Georgian lari",
            // "hkd": "Hong Kong dollar",
            // "huf": "Hungarian forint",
            // "inr": "Indian rupee",
            // "iqd": "Iraqi dinar",
            // "jpy": "Japanese yen",
            // "kzt": "Kazakhstani tenge",
            // "ltl": "Lithuanian litas",
            // "lvl": "Latvian lats",
            // "mdl": "Moldovan leu",
            // "mkd": "Macedonian denar",
            // "mxn": "Mexican peso",
            // "nzd": "New Zealand dollar",
            // "pkr": "Pakistani rupee",
            // "pln": "Poland złoty",
            // "ron": "Romanian leu",
            // "rsd": "Serbian dinar",
            // "rub": "Russian ruble",
            // "sek": "Swedish krona",
            // "sgd": "Singapore dollar",
            // "tjs": "Tajikistani somoni",
            // "tmt": "Turkmenistani manat",
            // "tnd": "Tunisian dinar",
            // "try": "Turkish lira",
            // "uah": "Ukrainian hryvnia",
            // "usd": "United States dollar",
            // "uzs": "Uzbekistani som",
        }
    }

    // https://api.apilayer.com/fixer/convert?to={to}&from={from}&amount={amount}", requestOptions)
    convert(from: any, to: any) {
        return this.http.get(
            // `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${from}&to=${to}&amount=1`,
            // `'https://api.fastforex.io/convert?from=USD&to=BLR&amount=123&api_key=a601de20ce-d8099bbaaf-rd4kag'`,
            `http://data.fixer.io/api/latest?access_key=8589e210c7837aca1457d193c1650b7d&symbols=${from},${to}&format=1`,
        );
    }
}
