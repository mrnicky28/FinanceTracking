import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CurrensiesDataService {
    constructor(private http: HttpClient) {}

    getCurrencies() {}
}
