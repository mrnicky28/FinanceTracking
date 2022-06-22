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

    getGrpahicalCurrencyData(coinId: string, currency: string, days: number) {
        return this.http.get<any>(
            `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`,
        );
    }

    getCurrencyById(coinId: string) {
        return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}`);
    }

    getNews() {
        return this.http.get<any>(
            `https://newsapi.org/v2/everything?q=crypto&apiKey=4c6a9c4b4b614dc581a1ed1eaa2d03df`,
        );
    }
    getNewsSearch(term: string) {
        return this.http.get<any>(
            `https://newsapi.org/v2/everything?q=${term}&apiKey=4c6a9c4b4b614dc581a1ed1eaa2d03df`,
        );
    }
}
// 4c6a9c4b4b614dc581a1ed1eaa2d03df
// f46b07e0f1804a24a5c1d8d5ff3dbc33(lavrinovich_nikita@mail.ru)
