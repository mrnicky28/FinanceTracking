import {
    CurrensiesDataService
} from 'src/app/shared/services/currencies-data/currensies-data.service';
import { CurrencyService } from 'src/app/shared/services/currency/currency.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    displayedColumns: string[] = ['name', 'price', 'price-change', 'market_cap'];
    dataSource!: MatTableDataSource<any>;
    currensies: any;
    currency: string = 'USD';

    @ViewChild(MatSort) sort!: MatSort;

    constructor(
        private currencyDataService: CurrensiesDataService,
        private currencyService: CurrencyService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.getCurrencyDataTicker();
        this.currencyService.getCurrency().subscribe((val) => {
            this.currency = val;
            this.getCurrencyDataTicker();
        });
    }

    getCurrencyDataTicker() {
        this.currencyDataService.getCurrencies(this.currency).subscribe((res) => {
            this.currensies = res.slice(0, 10);
            this.dataSource = new MatTableDataSource(this.currensies);
        });
    }

    goToDetails(row: any) {
        this.router.navigate(['cryptocurrency-detail', row.id]);
    }
}
