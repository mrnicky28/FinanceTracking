import {
    CurrensiesDataService
} from 'src/app/shared/services/currencies-data/currensies-data.service';

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    displayedColumns: string[] = ['name', 'price', 'price-change', 'market_cap'];
    dataSource!: MatTableDataSource<any>;
    currensies: any;

    constructor(private currencyDataService: CurrensiesDataService) {}

    ngOnInit(): void {
        this.getCurrencyDataTicker();
    }

    getCurrencyDataTicker() {
        this.currencyDataService.getCurrencies('usd').subscribe((res) => {
            this.currensies = res.slice(0, 10);
            this.dataSource = new MatTableDataSource(this.currensies);
        });
    }
}
