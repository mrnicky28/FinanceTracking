import {
    CurrensiesDataService
} from 'src/app/shared/services/currencies-data/currensies-data.service';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
    newsData: any;

    constructor(private currensiesDataService: CurrensiesDataService) {}

    ngOnInit(): void {
        this.currensiesDataService.getNews().subscribe((res) => {
            this.newsData = res.articles;
            console.log('news', res);
        });
    }

    getSearchNews(event: any) {
        this.currensiesDataService.getNewsSearch(event.target.value).subscribe((res) => {
            this.newsData = res.articles;
        });
    }
}
