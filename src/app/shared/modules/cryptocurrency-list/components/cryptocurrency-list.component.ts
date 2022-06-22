import {
    CurrensiesDataService
} from 'src/app/shared/services/currencies-data/currensies-data.service';
import { CurrencyService } from 'src/app/shared/services/currency/currency.service';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cryptocurrency-list',
    templateUrl: './cryptocurrency-list.component.html',
    styleUrls: ['./cryptocurrency-list.component.scss'],
})
export class CryptocurrencyListComponent implements OnInit {
    displayedColumns: string[] = ['name', 'price', 'price-change', 'market_cap'];
    currency: string = 'USD';
    dataSource!: MatTableDataSource<any>;
    currensies: any;

    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(
        private currencyDataService: CurrensiesDataService,
        private _liveAnnouncer: LiveAnnouncer,
        private router: Router,
        private currencyService: CurrencyService,
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
            this.currensies = res;
            this.dataSource = new MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }

    // ngAfterViewInit() {
    //     this.dataSource.sort = this.sort;
    // }

    // announceSortChange(sortState: Sort) {
    //     if (sortState.direction) {
    //         this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    //     } else {
    //         this._liveAnnouncer.announce('Sorting cleared');
    //     }
    // }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    goToDetails(row: any) {
        this.router.navigate(['cryptocurrency-detail', row.id]);
    }
}
