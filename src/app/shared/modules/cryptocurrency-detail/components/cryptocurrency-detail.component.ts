import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {
    CurrensiesDataService
} from 'src/app/shared/services/currencies-data/currensies-data.service';
import { CurrencyService } from 'src/app/shared/services/currency/currency.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-cryptocurrency-detail',
    templateUrl: './cryptocurrency-detail.component.html',
    styleUrls: ['./cryptocurrency-detail.component.scss'],
})
export class CryptocurrencyDetailComponent implements OnInit {
    coinData: any;
    coinId!: string;
    days: number = 30;
    currency: string = 'USD';
    public lineChartData: ChartConfiguration['data'] = {
        datasets: [
            {
                data: [],
                label: `Price Trends`,
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: '#009688',
                pointBackgroundColor: '#009688',
                pointBorderColor: '#009688',
                pointHoverBackgroundColor: '#009688',
                pointHoverBorderColor: '#009688',
            },
        ],
        labels: [],
    };
    public lineChartOptions: ChartConfiguration['options'] = {
        elements: {
            point: {
                radius: 1,
            },
        },

        plugins: {
            legend: { display: true },
        },
    };
    public lineChartType: ChartType = 'line';
    @ViewChild(BaseChartDirective) myLineChart!: BaseChartDirective;

    constructor(
        private currencyDataService: CurrensiesDataService,
        private activateRoute: ActivatedRoute,
        private currencyService: CurrencyService,
    ) {}

    ngOnInit(): void {
        this.activateRoute.params.subscribe((val) => {
            this.coinId = val['id'];
        });
        this.getCoinData();
        this.getGraphData(this.days);
        this.currencyService.getCurrency().subscribe((val) => {
            this.currency = val;
            this.getGraphData(this.days);
            this.getCoinData();
        });
    }

    getCoinData() {
        this.currencyDataService.getCurrencyById(this.coinId).subscribe((res) => {
            this.coinData = res;
            if (this.currency === 'EUR') {
                res.market_data.current_price.usd = res.market_data.current_price.eur;
                res.market_data.market_cap.usd = res.market_data.market_cap.eur;
            }
            res.market_data.current_price.usd = res.market_data.current_price.usd;
            res.market_data.market_cap.usd = res.market_data.market_cap.usd;

            if (this.currency === 'RUB') {
                res.market_data.current_price.usd = res.market_data.current_price.rub;
                res.market_data.market_cap.usd = res.market_data.market_cap.rub;
            }
            res.market_data.current_price.usd = res.market_data.current_price.usd;
            res.market_data.market_cap.usd = res.market_data.market_cap.usd;
            this.coinData = res;
        });
    }

    getGraphData(days: number) {
        this.days = days;
        this.currencyDataService
            .getGrpahicalCurrencyData(this.coinId, this.currency, this.days)
            .subscribe((res) => {
                setTimeout(() => {
                    this.myLineChart.chart?.update();
                }, 200);
                this.lineChartData.datasets[0].data = res.prices.map((i: any) => {
                    return i[1];
                });

                this.lineChartData.labels = res.prices.map((a: any) => {
                    let date = new Date(a[0]);
                    let time =
                        date.getHours() > 12
                            ? `${date.getHours() - 12}: ${date.getMinutes()} PM`
                            : `${date.getHours()}: ${date.getMinutes()} AM`;
                    return this.days === 1 ? time : date.toLocaleDateString();
                });
            });
    }
}
