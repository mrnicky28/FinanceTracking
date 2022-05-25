import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CurrensiesDataService {
    constructor(private http: HttpClient) {}

    getCurrencies(currency: string) {
        return this.http.get<any>(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false`,
        );
    }
}
