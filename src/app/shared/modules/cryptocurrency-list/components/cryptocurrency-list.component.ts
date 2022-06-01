import {
    CurrensiesDataService
} from 'src/app/shared/services/currencies-data/currensies-data.service';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-cryptocurrency-list',
    templateUrl: './cryptocurrency-list.component.html',
    styleUrls: ['./cryptocurrency-list.component.scss'],
})
export class CryptocurrencyListComponent implements OnInit {
    displayedColumns: string[] = ['name', 'price', 'price-change', 'market_cap'];
    dataSource!: MatTableDataSource<any>;
    currensies: any;

    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(
        private currencyDataService: CurrensiesDataService,
        private _liveAnnouncer: LiveAnnouncer,
    ) {}

    ngOnInit(): void {
        this.getCurrencyDataTicker();
    }
    getCurrencyDataTicker() {
        this.currencyDataService.getCurrencies('usd').subscribe((res) => {
            this.currensies = res;
            this.dataSource = new MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
        });
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
